import React, { Component } from "react"
import { connect } from "react-redux"

import {
    attributes,
  addAttributes,
  deleteAttributes,
  updateAttributes
} from "../../../../src/reduxHelper"
import Attribute from "../../../../src/components/organisms/taxCategory"
import createAttributeSet from "../../../../src/components/organisms/forms/createAttributeSet"
import { attributesColumns } from "./attributes.data"
import { taxCategoryData } from "../../../../pagesData/taxCategory"
import Loading from "../../../../src/components/atoms/loading"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { attributesTableData: [], filteredTableData: [] }
  }

  componentDidMount() {
    this.loadAttributes()
  }

  handleCreateAttributeSet(data, cb) {
    data.values.attributeID = uuid()
    console.log("post request data", data.values)
    this.props
      .addAttributes(data.values)
      .then(res => {
        this.loadAttributes()
        cb({ status: true, message: "AttributeSet created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.attributesTableData.filter(data => {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.attributes.isLoaded)
      return (
        <Attribute
          form={createAttributeSet}
          title="Create Attributes"
          rowSelection={{}}
          cascaderData={taxCategoryData.cascaderData}
          columns={attributesColumns}
          columnData={this.state.filteredTableData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onCreate={(data, cb) => this.handleCreateAttributeSet(data, cb)}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading/>
  }

  _createAttributeSetColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.alias = item.alias
        object.attributeID = item.attributeID
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteAttributes(id)
              .then(res => {
                this.loadAttributes()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props
              .updateAttributes(id, data.values)
              .then(res => {
                this.loadAttributes()
                cb({ status: true, message: "Attribute Set updated" })
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

  loadAttributes() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getAttributes(urlParams)
      .then(data =>{
        console.log(data)
        this.setState(
          {
            attributesTableData: this._createAttributeSetColoumns(
              this.props.attributes.response.data
            )
          },
          () => {
            this.setState({
              filteredTableData: this.state.attributesTableData
            })
          }
        )
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  attributes: state.attributes
})

const mapDispatchToProps = dispatch => ({
  getAttributes: object => dispatch(attributes.action(object)),
  addAttributes: object => dispatch(addAttributes.action(object)),
  deleteAttributes: attributeID =>
    dispatch(deleteAttributes.action(attributeID)),
  updateAttributes: (attributeID, object) =>
    dispatch(updateAttributes.action(attributeID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
