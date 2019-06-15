import React, { Component } from "react"
import { Form, Checkbox, Text, Select, Date } from "../../../utils/xinformed"
import { ArrayField } from "informed"
import { Button, Row, Col } from "antd"

class editPurchase extends Component {
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
    const style = {
      margin: { marginBottom: "10px" },
      dynamicForm: { marginTop: "20px", marginBottom: "20px" }
    }

    var values
    this.props.prefilledValues
      ? (values = this.props.prefilledValues)
      : (values = {})

    return (
      <div>
        <Form getApi={this.setFormApi}>
          <Text
            field="vendor"
            placeholder="Vendor"
            style={style.margin}
            defaultValue={values.vendor}
          />
          <Text
            field="description"
            placeholder="Description"
            style={style.margin}
            defaultValue={values.description}
          />
          <Select
            field="location"
            placeholder="Location"
            option={this.props.formData.location}
            style={style.margin}
            value={values.location}
          />
          <Date field="date" style={style.margin} placeholder={values.date} />
          <Text
            field="amount"
            placeholder="Amount"
            style={style.margin}
            defaultValue={values.amount}
          />
        </Form>
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
            Proceed
          </Button>
        </div>
      </div>
    )
  }
}

export default editPurchase
