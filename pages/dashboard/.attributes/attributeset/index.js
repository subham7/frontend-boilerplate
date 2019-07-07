import React, { Component } from "react"
import { connect } from "react-redux"

import {
  attributes,
    attributesets,
    assignedAttribute,
  addAttributeSet,
  deleteAttributeSet,
  updateAttributeSet,
  assignAttribute
} from "../../../../src/reduxHelper"
import AttributeSet from "../../../../src/components/organisms/taxCategory"
import createAttributeSet from "../../../../src/components/organisms/forms/createAttributeSet"
import { attributesetsColumns } from "./attributeset.data"
import { taxCategoryData } from "../../../../pagesData/taxCategory"
import Loading from "../../../../src/components/atoms/loading"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { attributeSetTableData: [], filteredTableData: [] }
  }

  componentDidMount() {
    this.props.getAttribute().then(() => {
      this.loadAttributeSet()
    })
  }

  handleCreateAttributeSet(data, cb) {
    data.values.attributesetID = uuid()
    console.log("post request data", data.values)
    this.props
      .addAttributeSet(data.values)
      .then(res => {
        this.loadAttributeSet()
        cb({ status: true, message: "AttributeSet created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.attributeSetTableData.filter(data => {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.attributesets.isLoaded)
      return (
        <AttributeSet
          form={createAttributeSet}
          title="Create Attribute Set"
          rowSelection={{}}
          cascaderData={taxCategoryData.cascaderData}
          columns={attributesetsColumns}
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
        object.attributesetID = item.attributesetID
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteAttributeSet(id)
              .then(res => {
                this.loadAttributeSet()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props
              .updateAttributeSet(id, data.values)
              .then(res => {
                this.loadAttributeSet()
                cb({ status: true, message: "Attribute Set updated" })
              })
              .catch(err => {
                console.log(err)
                cb({ status: false, message: "Some Error while updating" })
              })
          }
        },
        (object.assign = {
          handleAssign: (data, id, cb) => {
            let obj = {}
            obj.attributeset = id
            obj.attribute = data.values.assignedTo
            console.log(obj)
            this.props
              .assignAttribute(obj)
              .then(res => {
                cb({
                  status: true,
                  message: "Attributes assigned"
                })
              })
              .catch(err => {
                console.log(err)
                cb({ status: true, message: "ERROR!" })
              })
          },
          assignedAttribute: attributesetID => this.props.assignedAttribute(attributesetID),
          attributeData: this.createSelectAttributeData(
            this.props.attributes.response.data
          ),
          attributesetID: item.attributesetID
        })
        temp.push(object)
      })
    }
    return temp
  }

  loadAttributeSet() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getAttributeSet(urlParams)
      .then(data =>{
        console.log(data)
        this.setState(
          {
            attributeSetTableData: this._createAttributeSetColoumns(
              this.props.attributesets.response.data
            )
          },
          () => {
            this.setState({
              filteredTableData: this.state.attributeSetTableData
            })
          }
        )
      })
      .catch(err => console.log(err))
  }

  createSelectAttributeData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.attributeID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  attributesets: state.attributesets,
  attributes: state.attributes
})

const mapDispatchToProps = dispatch => ({
  getAttributeSet: object => dispatch(attributesets.action(object)),
  getAttribute: object => dispatch(attributes.action(object)),
  addAttributeSet: object => dispatch(addAttributeSet.action(object)),
  assignAttribute: object => dispatch(assignAttribute.action(object)),
  assignedAttribute: attributesetID => dispatch(assignedAttribute.action(attributesetID)),
  deleteAttributeSet: attributesetID =>
    dispatch(deleteAttributeSet.action(attributesetID)),
  updateAttributeSet: (attributesetID, object) =>
    dispatch(updateAttributeSet.action(attributesetID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
