import React, { Component } from "react"
import { connect } from "react-redux"

import {
  taxCategories,
  addTaxCategory,
  deleteTaxCategory,
  updateTaxCategory
} from "../../../../src/reduxHelper"
import TaxCategory from "../../../../src/components/organisms/taxCategory"
import { taxCategoryColumns } from "./taxCategory.data"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { taxCategoryTableData: [] }
  }

  componentDidMount() {
    this.loadTaxCategoryData()
  }

  handleCreateTaxes(data, cb) {
    data.values.taxcategoryID = uuid()
    data.values.business = this.props.business.response.data[0].businessID
    this.props
      .addTaxCategory(data.values)
      .then(res => {
        this.loadTaxCategoryData()
        cb({ status: true, message: "Taxes created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  render() {
    if (true)
      return (
        <TaxCategory
          rowSelection={{}}
          columns={taxCategoryColumns}
          columnData={this.state.taxCategoryTableData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onCreate={(data, cb) => this.handleCreateTaxes(data, cb)}
        />
      )
    else return <h1>Loading...</h1>
  }

  _createTaxCategoryColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.taxCode = item.taxcategoryID
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteTaxCategory(id)
              .then(res => {
                this.loadTaxCategoryData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props
              .updateTaxCategory(id, data.values)
              .then(res => {
                this.loadTaxCategoryData()
                cb({ status: true, message: "Tax category updated" })
              })
              .catch(err => {
                console.log(err)
                cb({ status: false, message: "Some Error while updating" })
              })
          }
        }
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = item.name
      object.taxCode = item.taxcategoryID
      object.handleFeatures = {
        handleDelete: id => {
          console.log(id)
          this.props
            .deleteTaxCategory(id)
            .then(res => {
              this.loadTaxCategoryData()
            })
            .catch(err => {
              console.log(err)
            })
        },
        handleUpdate: (data, id, cb) => {
          // console.log("clicked", data, id, cb)
          this.props
            .updateTaxCategory(id, data.values)
            .then(res => {
              this.loadTaxCategoryData()
              cb({ status: true, message: "Tax category updated" })
            })
            .catch(err => {
              console.log(err)
              cb({ status: false, message: "Some Error while updating" })
            })
        }
      }
      temp.push(object)
    }
    return temp
  }

  // Integrated with test api
  loadTaxCategoryData() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getTaxCategories(urlParams)
      .then(res => {
        this.setState({
          taxCategoryTableData: this._createTaxCategoryColoumns(
            this.props.taxCategories.response.data
          )
        })
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  taxCategories: state.taxCategories,
  deleteTaxCategory: state.deleteTaxCategory,
  updateTaxCategory: state.updateTaxCategory
})

const mapDispatchToProps = dispatch => ({
  getTaxCategories: object => dispatch(taxCategories.action(object)),
  addTaxCategory: object => dispatch(addTaxCategory.action(object)),
  deleteTaxCategory: taxcategoryID =>
    dispatch(deleteTaxCategory.action(taxcategoryID)),
  updateTaxCategory: (taxcategoryID, object) =>
    dispatch(updateTaxCategory.action(taxcategoryID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
