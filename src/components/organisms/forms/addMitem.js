import React, { Component } from "react"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button } from "antd"

const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class F5 extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }
  handleClick() {
    this.props.onSubmit(this.formAPi.getState())
  }
  setFormApi(formAPi) {
    this.formAPi = formAPi
  }
  render() {
    var values;
    this.props.prefilledValues ? values = this.props.prefilledValues : values = {}
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="name"
                placeholder="Mitem Name"
                defaultValue={values.name}
              />
            </div>
            <div style={{ float: "left" }}>
              <Text
                style={{ width: 195 }}
                field="price"
                placeholder="Price"
                defaultValue={values.price}
              />
            </div>
          </div>
          {/*<div style={{marginBottom:15}}><Text style={{width:195}} field="taxcategory"  placeholder="Tax Category" /></div>*/}

          {/* <div style={{ marginBottom: 15 }}>
            <Select
              field="taxcategory"
              style={{ width: 195 }}
              option={this.props.formData}
              defaultValue={values.taxcategory}
            />
          </div> */}

          <div style={{ display: "inline-block" }}>
            <Button
              style={{ float: "left", width: 192 }}
              onClick={this.props.onCancel}
            >
              Cancel
            </Button>
            <Button
              style={{ float: "left", width: 192, marginLeft: 15 }}
              type="primary"
              onClick={this.handleClick}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default F5
