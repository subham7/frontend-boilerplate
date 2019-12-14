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
        {/* <Text
            style={{ width: 195,display:'none' }}
            field="employee"
            value={this.props.employee}
          />
          <Text
            style={{ width: 195 ,display:'none'}}
            field="location"
            value={this.props.location}
          /> */}
          <Text
            style={{ width: 195 }}  
            field="startCash"
            placeholder="Start Cash"
          />

          <Text
            style={{ width: 195 }}  
            field="cashSubmitted"
            placeholder="Cash Submitted"
          />

          <Text
            style={{ width: 195 }}  
            field="difference"
            placeholder="Difference"
            
          />

          <Text
            // style={{ width: 195 }}  
            field="reason"
            placeholder="Reason"
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
