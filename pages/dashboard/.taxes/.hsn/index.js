import React from "react"
import { connect } from "react-redux"
import HSN from "../../../../src/components/organisms/hsn"

import { hsnColumns } from "./hsn.data"
import { itemData } from "../../../../pagesData/item.data"
import { hsncodes, addHsnCode, deleteHsnCode, updateHsnCode, taxCategories, addhsncodetaxcategories, taxCategoryHsn } from "../../../../src/reduxHelper"
import uuid from "uuid/v4"
import { Spin } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hsnTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props.getTaxCategories(urlParams).then(() => {
      this.loadHsnCodeData()
      // this.props.getHsnTaxCategory("c1b3e328-bc94-44d6-ad27-aa0f0cbd0983").then(res=>{
      //   console.log(res, "taxoo")
      // })
    })
  }

  handleCreateTaxes(data, cb) {
    let object = {}
    object.hsnname = data.values.name
    object.hsncodeID = uuid()
    this.props.addHsnCode(object).then(res => {
      this.loadHsnCodeData()
      cb({ status: true, message: "HSN created successfully" })
    }).catch(err => {
      console.log(err)
      cb({ status: false, message: "SomeError occured" })
    })
  }

  handleSearch(e) {
    const filteredEvents = this.state.hsnTableData.filter(function (data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.hsncodes.response) {
      return (
        <div>
          <HSN
            rowSelection={{}}
            cascaderData={itemData.cascaderData}
            columns={hsnColumns}
            columnData={this.state.filteredTableData}
            pagination={{ pageSize: 7, showLessItems: true, showSizeChanger: true, pageSizeOptions: ['5', '10', '15', '20'] }}
            onCreate={(data, cb) => this.handleCreateTaxes(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <Spin size="large" />
    }
  }

  _createHsnCodeColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.hsnname
        object.hsnCode = item.hsncodeID
        object.handleFeatures = {
          handleDelete: (id) => {
            this.props.deleteHsnCode(id).then(res => {
              this.loadHsnCodeData();
            }).catch(err => {
              console.log(err);
            })
          },
          handleEdit: (data, id, cb) => {
            // console.log("clicked", data, id)
            let obj = {}
            obj.hsnname = data.values.name
            this.props.updateHsnCode(id, obj).then(res => {
              this.loadHsnCodeData()
              cb({ status: true, message: "HSN Code updated" })
            }).catch(err => {
              console.log(err)
              cb({ status: false, message: "Some Error while updating" })
            })
          }
        },
          object.assign = {
            handleAssign: (data, id, cb) => {
              let obj = {}
              obj.hsncode = id;
              obj.taxcategory = data.values.assignedTo
              console.log(obj)
              this.props.addhsncodetaxcategories(obj).then(res => {
                cb({ status: true, message: "Tax Category assigned to HSN" })
              }).catch(err => {
                console.log(err)
                cb({ status: true, message: "Some error occured" })
              })
            },
            // assignedTaxCategory: (hsnID) => this.props.getHsnTaxCategory(hsnID),
            taxCategoryData: this.createSelectData(this.props.taxCategory.response.data)
          }
        temp.push(object)
      })
    }
    return temp
  }

  loadHsnCodeData() {
    this.props.getHsnCodes().then(res => {
      this.setState({ hsnTableData: this._createHsnCodeColoumns(this.props.hsncodes.response.data) })
      this.setState({ filteredTableData: this.state.hsnTableData })
    }).catch(err => {
      console.log(err)
    })
  }

  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.taxcategoryID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  hsncodes: state.hsncodes,
  taxCategory: state.taxCategories,
})

const mapDispatchToProps = dispatch => ({
  getHsnCodes: () => dispatch(hsncodes.action()),
  addHsnCode: object => dispatch(addHsnCode.action(object)),
  deleteHsnCode: hsncodeID => dispatch(deleteHsnCode.action(hsncodeID)),
  updateHsnCode: (hsncodeID, object) => dispatch(updateHsnCode.action(hsncodeID, object)),
  getTaxCategories: object => dispatch(taxCategories.action(object)),
  addhsncodetaxcategories: (object) => dispatch(addhsncodetaxcategories.action(object)),
  getHsnTaxCategory: hsnID => dispatch(taxCategoryHsn.action(hsnID)),
})
export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)