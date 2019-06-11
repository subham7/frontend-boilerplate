import React, { Component } from "react"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"

class createPurchase extends Component {
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
    return (
      <div className="App">
        <div>{}</div>
        <Form getApi={this.setFormApi}>
          <Select field="product" option={[{ name: "", value: "" }]} />
          <Text field="units" placeholder="Units" />
          <Text field="mrp" placeholder="MRP" />
          <Text field="cp" placeholder="Cost Price" />
        </Form>
      </div>
    )
  }
}

export default createPurchase
