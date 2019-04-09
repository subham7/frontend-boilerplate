import React, { Component } from "react"
import { connect } from "react-redux"

import { taxCategory } from "../../../../src/reduxHelper"
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

  render() {
    if (this.props.taxCategory.isLoaded)
      return (
        <TaxCategory
          rowSelection={{}}
          columns={taxCategoryColumns}
          columnData={this.state.taxCategoryTableData}
        />
      )
    else return <h1>Loading...</h1>
  }

  _createTaxCategoryColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.title
        object.taxCode = item.id
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = item.title
      object.taxCode = item.id
      temp.push(object)
    }
    return temp
  }

  // Integrated with test api
  loadTaxCategoryData() {
    let businessID = this.props.business.response.data.businessID
    this.props
      .getTaxCategory()
      .then(res => {
        this.setState({
          taxCategoryTableData: this._createTaxCategoryColoumns(
            this.props.taxCategory.response.data
          )
        })
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  taxCategory: state.taxCategory
})

const mapDispatchToProps = dispatch => ({
  getTaxCategory: object => dispatch(taxCategory.action(object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
