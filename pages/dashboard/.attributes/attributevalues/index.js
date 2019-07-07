import React, { Component } from "react"
import { connect } from "react-redux"

import {
  attributes,
  attributevalues,
  attributeName,
  addAttributeValues,
  deleteAttributeValues,
  updateAttributeValues
} from "../../../../src/reduxHelper"
import AttributeValue from "../../../../src/components/organisms/taxCategory"
import createAttributeValue from "../../../../src/components/organisms/forms/createAttributeValue"
import { attributeValueColumns } from "./attributevalue.data"
import { taxCategoryData } from "../../../../pagesData/taxCategory"
import Loading from "../../../../src/components/atoms/loading"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { attributesTableData: [], filteredTableData: [] }
  }

  componentDidMount() {
    this.props.getAttributes().then((res) => {
      // console.log(res)
      this.loadAttributeValue()
    })
  }

  handleCreateAttributeValue(data, cb) {
    data.values.attributevalueID = uuid()
    console.log("post request data", data.values)
    this.props
      .addAttributeValues(data.values)
      .then(res => {
        this.loadAttributeValue()
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
      return data.value.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.attributevalues.isLoaded)
      return (
        <AttributeValue
          form={createAttributeValue}
          formData={this.createSelectAttributeData(
            this.props.attributes.response.data
          )}
          title="Create Attributes"
          rowSelection={{}}
          cascaderData={taxCategoryData.cascaderData}
          columns={attributeValueColumns}
          columnData={this.state.filteredTableData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onCreate={(data, cb) => this.handleCreateAttributeValue(data, cb)}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading />
  }

  _createAttributeValueColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.value = item.value
        object.attribute = item.attribute
        object.attributeFunc = this.props.getAttributeByName(item.attributevalueID).then(res => (res[0].attributeunfold))
        object.attributevalueID = item.attributevalueID
        object.selectData = this.createSelectAttributeData(
          this.props.attributes.response.data
        )
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteAttributeValues(id)
              .then(res => {
                this.loadAttributeValue()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props
              .updateAttributeValues(id, data.values)
              .then(res => {
                this.loadAttributeValue()
                cb({ status: true, message: "AttributeValue Set updated" })
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

  loadAttributeValue() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getAttributeValue(urlParams)
      .then(data => {
        console.log(data)
        this.setState(
          {
            attributesTableData: this._createAttributeValueColoumns(
              this.props.attributevalues.response.data
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
  attributevalues: state.attributevalues,
  attributes: state.attributes
})

const mapDispatchToProps = dispatch => ({
  getAttributeValue: object => dispatch(attributevalues.action(object)),
  getAttributes: object => dispatch(attributes.action(object)),
  getAttributeByName: attributevalueID => dispatch(attributeName.action(attributevalueID)),
  addAttributeValues: object => dispatch(addAttributeValues.action(object)),
  deleteAttributeValues: attributevalueID =>
    dispatch(deleteAttributeValues.action(attributevalueID)),
  updateAttributeValues: (attributevalueID, object) =>
    dispatch(updateAttributeValues.action(attributevalueID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
