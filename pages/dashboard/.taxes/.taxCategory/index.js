import React, { Component } from "react"
import { connect } from "react-redux"

import { taxCategories, addTaxCategory } from "../../../../src/reduxHelper"
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
    data.values.business = this.props.business.response.data.businessID
      this.props.addTaxCategory(data.values).then(res =>{
        this.loadTaxCategoryData()
        cb({status:true, message: "Taxes created successful"})
      }).catch(err => {
        console.log(err)
        cb({status:false, message: "SomeError occured"})
      })
    }

  render() {
    if (true)
      return (
        <TaxCategory
          rowSelection={{}}
          columns={taxCategoryColumns}
          columnData={this.state.taxCategoryTableData}
          onCreate={(data,cb) => this.handleCreateTaxes(data,cb)}
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
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = item.name
      object.taxCode = item.taxcategoryID
      temp.push(object)
    }
    return temp
  }

  // Integrated with test api
  loadTaxCategoryData() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data.businessID
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
  taxCategories: state.taxCategories
})

const mapDispatchToProps = dispatch => ({
  getTaxCategories: object => dispatch(taxCategories.action(object)),
  addTaxCategory: object => dispatch(addTaxCategory.action(object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
