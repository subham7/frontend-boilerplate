import React from "react"
import { connect } from "react-redux"

import Taxes from "../../../../src/components/organisms/taxes"

import { taxesColumns } from "./taxes.data"
import { itemData } from "../../../../pagesData/item.data"
import {
  addTax,
  taxes,
  getTaxCategories,
  deleteTax,
  updateTax
} from "../../../../src/reduxHelper"
import wrapper from "./wrapper"
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taxesTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    this.loadTaxesData()
  }

  handleCreateTaxes(data, cb) {
    data.values.taxID = uuidv4()
    this.props
      .addTax(data.values)
      .then(res => {
        this.loadTaxesData()
        cb({ status: true, message: "Taxes created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.taxesTableData.filter(function(data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    // will not render under taxcategory loaded
    if (this.props.taxCategories.isLoaded) {
      return (
        <div>
          <Taxes
          formData={this.createSelectData(
              this.props.taxCategories.response.data
            )}
            rowSelection={{}}
            cascaderData={itemData.cascaderData}
            columns={taxesColumns}
            columnData={this.state.filteredTableData}
            pagination={{
              pageSize: 10,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            onCreate={(data, cb) => this.handleCreateTaxes(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }

  _createTaxesColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.taxID = item.taxID
        object.taxCategory = item.taxcategory
        object.percentage = item.percentage
        object.selectData = this.createSelectData(
          this.props.taxCategories.response.data
        )
        object.prefilledValues = item
        object.handleFeatures = {
          handleDelete: urlParams => {
            console.log("here", urlParams)
            this.props
              .deleteTax(urlParams.taxID)
              .then(res => {
                this.loadTaxesData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleEdit: (data, taxID, cb) => {
            this.props
              .updateTax(taxID, data.values)
              .then(res => {
                this.loadTaxesData()
                cb({ status: true, message: "Tax updated successfully" })
              })
              .catch(err => {
                console.log(err)
                cb({
                  status: false,
                  message: "Some error occured while updating"
                })
              })
          }
        },
        (object.assign = {
          handleAssign: (data, id, cb) => {
            let obj = {}
            obj.taxid = id
            obj.hsncode = data.values.assignedTo
            console.log(obj)
            // this.props
            //   .addhsncodetaxcategories(obj)
            //   .then(res => {
            //     cb({
            //       status: true,
            //       message: "HSN assigned"
            //     })
            //   })
            //   .catch(err => {
            //     console.log(err)
            //     cb({ status: true, message: "Error occured" })
            //   })
          },
          // assignedTaxCategory: hsnID => this.props.getHsnTaxCategory(hsnID),
          hsnData: this.createSelectHsnData(
            this.props.hsncodes.response.data
          ),
          taxID: item.taxID
        })
        temp.push(object)
      })
    }
    return temp
  }

  loadTaxesData() {
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getTaxes(businessID)
      .then(res => {
        this.setState({ taxesTableData: this._createTaxesColumns(res) })
        this.setState({ filteredTableData: this.state.taxesTableData })
      })
      .catch(err => {
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

  createSelectHsnData(data) {
    let selectData = data.map(item => ({
      name: item.hsnname,
      value: item.hsncodeID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  taxes: state.taxes,
  taxCategories: state.taxCategories,
  hsncodes: state.hsncodes,
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getTaxes: businessID => dispatch(taxes.action(businessID)),
  addTax: object => dispatch(addTax.action(object)),
  deleteTax: taxID => dispatch(deleteTax.action(taxID)),
  getTaxCategories: businessID => dispatch(getTaxCategories.action(businessID)),
  updateTax: (taxID, object) => dispatch(updateTax.action(taxID, object))
})
export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
