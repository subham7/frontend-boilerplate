import React, { Component } from "react"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button } from "antd"

const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class cashReconSubmit extends Component {
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
    var values
    this.props.prefilledValues
      ? (values = this.props.prefilledValues)
      : (values = {})
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <Text
            style={{ width: 195 }}
            field="cashSubmit"
            placeholder="Cash Submitted"
          />

          <br />
          <Button
            style={{ float: "left", width: 192, marginLeft: 15 }}
            type="primary"
            onClick={this.handleClick}
          >
            Save
          </Button>
        </Form>
      </div>
    )
  }
}

export default cashReconSubmit
