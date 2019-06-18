import React, { Component } from "react"
import { connect } from "react-redux"

import {
  products,
  modifieruse,
  getBusinessById
} from "../../../src/reduxHelper"
import Modifiers from "../../../src/components/organisms/modifiers"

import { itemData } from "./modifier.data"
import uuidv4 from "uuid/v4"
import Loading from "../../../src/components/atoms/loading"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modifierItemData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    this.props.getProducts(businessID)
    this.loadModifierData()
  }

  handleSearch(e) {
    console.log(e.target.value)
    const filteredEvents = this.state.modifierItemData.filter(function(data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.modifieruse.isLoaded)
      return (
        <div>
          <Modifiers
            cascaderData={itemData.cascaderData}
            columns={itemData.productColumns}
            columnData={this.state.filteredTableData}
            pagination={{
              pageSize: 5,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    else return <Loading />
  }

  _createModifierColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = this.props.products.response.data[
          this.props.products.response.data.findIndex(
            id => id.productID == item.product
          )
        ].name
        object.options = "not mapped"
        object.location = this.props.business.response.data[0].city
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = this.props.products.response.data[
        this.props.products.response.data.findIndex(
          id => id.productID == item.product
        )
      ].name
      object.options = "not mapped"
      object.location = this.props.business.response.data[0].city
      temp.push(object)
    }
    return temp
  }

  loadModifierData() {
    this.props
      .getModifieruse()
      .then(modifiers => {
        this.setState({
          modifierItemData: this._createModifierColumns(modifiers)
        })
        this.setState({ filteredTableData: this.state.modifierItemData })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  modifieruse: state.modifieruse,
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getModifieruse: () => dispatch(modifieruse.action()),
  getProducts: businessID => dispatch(products.action(businessID)),
  getBusinessById: businessID => dispatch(getBusinessById.action(businessID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
