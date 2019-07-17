import React, { Component } from "react"
import { Form, Checkbox, Text, TextArea } from "../../../utils/xinformed"
import { Button } from "antd"
import Link from "next/link"

const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class F extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }
  handleClick() {
    this.props.getFormData(this.formAPi.getState())
  }
  setFormApi(formAPi) {
    this.formAPi = formAPi
  }
  render() {
    return (
      <div>
        <Form getApi={this.setFormApi}>
          <div
            style={{ display: "inline-block", marginBottom: 15, width: "100%" }}
          >
            <div style={{ float: "left", width: "48%" }}>
              <Text field="firstName" placeholder="First Name" />
            </div>
            <div style={{ float: "right", width: "48%" }}>
              <Text field="lastName" placeholder="Last Name" />
            </div>
          </div>
          <Text
            field="userName"
            style={{ marginBottom: 15 }}
            placeholder="User Name"
          />
          <Text
            field="email"
            style={{ marginBottom: 15 }}
            placeholder="Email"
          />
          <Text
            field="phone"
            style={{ marginBottom: 15 }}
            placeholder="Phone"
          />
          <Text
            field="password"
            style={{ marginBottom: 15 }}
            placeholder="Password"
          />
          <Text
            field="c_password"
            style={{ marginBottom: 15 }}
            placeholder="Confirm-Password"
          />
          <div style={{ margin: 10, marginLeft: 2 }}>
            <Checkbox />
            <label style={{ marginLeft: 10 }}>
              I agree with terms and conditions
            </label>
          </div>
          <div style={{ marginLeft: "18%" }}>
            <Button
              style={{ width: 150, marginLeft: 100 }}
              type="primary"
              onClick={e => this.handleClick(e)}
            >
              Log-in
            </Button>
            <h4 style={{ marginLeft: 75, marginTop: 25 }}>
              Already have an account? <Link as={`/`} href={`/`}>
              <a>Sign in</a>
            </Link>
            </h4>{" "}
            
            
          </div>
        </Form>
      </div>
    )
  }
}

export default F
