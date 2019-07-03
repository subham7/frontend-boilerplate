import React, { Component } from "react"
import { connect } from "react-redux"

import {
  mitems,
  addMitem,
  deleteMitem,
  updateMitem
} from "../../../../src/reduxHelper"
import Mitems from "../../../../src/components/organisms/taxCategory"
import createMitem from "../../../../src/components/organisms/forms/addMitem"
import { mitemsColumns } from "./mitems.data"
import { taxCategoryData } from "../../../../pagesData/taxCategory"
import Loading from "../../../../src/components/atoms/loading"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mitemsTableData: [], filteredTableData: [] }
  }

  componentDidMount() {
    this.loadModifierItems()
  }

  handleCreateMitems(data, cb) {
    data.values.mitemID = uuid()
    data.values.business = this.props.business.response.data[0].businessID
    this.props
      .addMitem(data.values)
      .then(res => {
        this.loadModifierItems()
        cb({ status: true, message: "Mitems created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.mitemsTableData.filter(data => {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.mitems.isLoaded)
      return (
        <Mitems
          form={createMitem}
          title="Create Mitems"
          rowSelection={{}}
          cascaderData={taxCategoryData.cascaderData}
          columns={mitemsColumns}
          columnData={this.state.filteredTableData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onCreate={(data, cb) => this.handleCreateMitems(data, cb)}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading/>
  }

  _createMitemsColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.price = item.price
        object.mitemID = item.mitemID
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteMitem(id)
              .then(res => {
                this.loadModifierItems()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props
              .updateMitem(id, data.values)
              .then(res => {
                this.loadModifierItems()
                cb({ status: true, message: "Mtem updated" })
              })
              .catch(err => {
                console.log(err)
                cb({ status: false, message: "Some Error while updating" })
              })
          }
        }
        temp.push(object)
      })
    }
    return temp
  }

  loadModifierItems() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getMitems(urlParams)
      .then(data =>{
        console.log(data)
        this.setState(
          {
            mitemsTableData: this._createMitemsColoumns(
              this.props.mitems.response.data
            )
          },
          () => {
            this.setState({
              filteredTableData: this.state.mitemsTableData
            })
          }
        )
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  mitems: state.mitems
})

const mapDispatchToProps = dispatch => ({
  getMitems: object => dispatch(mitems.action(object)),
  addMitem: object => dispatch(addMitem.action(object)),
  deleteMitem: mitemID =>
    dispatch(deleteMitem.action(mitemID)),
  updateMitem: (mitemID, object) =>
    dispatch(updateMitem.action(mitemID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
