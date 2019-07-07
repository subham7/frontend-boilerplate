import React, { Component } from "react"
import { connect } from "react-redux"

import {
  products,
  modifiers,
  addModifier,
  deleteModifier,
  updateModifier,
  addModifierProduct,
  modifierProduct,
  mitems,
} from "../../../../src/reduxHelper"
import Modifiers from "../../../../src/components/organisms/modifiers"

import { itemData } from "./modifier.data"
import uuidv4 from "uuid/v4"
import Loading from "../../../../src/components/atoms/loading"

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
    this.props.getMitems(businessID)
    .then((data) => {
      //  console.log(data, "mitemmmmmm")
    })
    this.props.getProducts(businessID).then(() => {
      this.loadModifierData()
    })

  }

  handleModifiers(data, cb) {
    data.values.modifierID = uuidv4()
    data.values.business = this.props.business.response.data[0].businessID
    console.log(data.values)
    this.props
      .addModifier(data.values)
      .then(res => {
        this.loadModifierData()
        cb({ status: true, message: "Modifier created successfully" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleSearch(e) {
    console.log(e.target.value)
    const filteredEvents = this.state.modifierItemData.filter(function (data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.modifiers.response && this.props.products.response)
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
            onCreate={(data, cb) => this.handleModifiers(data, cb)}
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
        object.name = item.name,
        object.modifierID = item.modifierID
        object.allowMultiple = item.allowMultiple,
        object.handleFeatures = {
          handleDelete: modifierID => {
            console.log("here", modifierID)
            this.props
              .deleteModifier(modifierID)
              .then(res => {
                this.loadModifierData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleEdit: (data, modifierID, cb) => {
            data.values.business = this.props.business.response.data[0].businessID
            console.log(data.values)
            this.props
              .updateModifier(modifierID, data.values)
              .then(res => {
                this.loadModifierData()
                cb({ status: true, message: "Modifier updated successfully" })
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
        object.assignProduct = {
          handleAssignProduct: (data, id, cb) => {
            let obj = {}
            obj.modifier = id
            obj.product = data.values.assignedTo
            console.log(obj)
            this.props
              .addModifierProduct(obj)
              .then(res => cb({ status: true, message: "Product assigned successfully to modifier" }))
              .catch(err => {
                console.log(err)
                cb({ status: true, message: "some error occured" })
              })
          },
          assignedProduct: (modifierID) => this.props.getModifierProduct(modifierID),
          productData: this.createSelectProductData(this.props.products.response.data),
          modifierID: item.modifierID
        },
        object.assignMitem = {
          handleAssignMitem: (data, id, cb) => {
            let obj = {}
            obj.modifier = id
            obj.mitem = data.values.assignedTo
            console.log(obj)
            // this.props
            //   .addModifierMitem(obj)
            //   .then(res => cb({ status: true, message: "Modifier  Item assigned successfully to modifier" }))
            //   .catch(err => {
            //     console.log(err)
            //     cb({ status: true, message: "some error occured" })
            //   })
          },
          assignedProduct: (modifierID) => this.props.getModifierProduct(modifierID),
          mitemData: this.createSelectMitemData(this.props.mitems.response.data),
          modifierID: item.modifierID
        }
        temp.push(object)
      })
    }
    return temp
  }

  loadModifierData() {
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getmodifiers(businessID)
      .then(modifiers => {
        console.log(modifiers, "modifiersss")
        this.setState({
          modifierItemData: this._createModifierColumns(modifiers)
        })
        this.setState({ filteredTableData: this.state.modifierItemData })
      })
      .catch(err => {
        console.log(err)
      })
  }

  createSelectProductData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.productID
    }))
    return selectData
  }

  createSelectMitemData(data) {
    console.log(data, "seleeeect")
    let selectData = data.map(item => ({
      name: item.name,
      value: item.mitemID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  modifiers: state.modifiers,
  products: state.products,
  mitems: state.mitems,
})

const mapDispatchToProps = dispatch => ({
  getmodifiers: (businessID) => dispatch(modifiers.action(businessID)),
  getProducts: businessID => dispatch(products.action(businessID)),
  addModifier: (object) => dispatch(addModifier.action(object)),
  addModifierProduct: (object) => dispatch(addModifierProduct.action(object)),
  getModifierProduct: (modifierID) => dispatch(modifierProduct.action(modifierID)),
  getMitems: (businessID) => dispatch(mitems.action(businessID)),
  deleteModifier: modifierID => dispatch(deleteModifier.action(modifierID)),
  updateModifier: (modifierID, object) => dispatch(updateModifier.action(modifierID)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
