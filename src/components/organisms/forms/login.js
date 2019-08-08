import React, { Component } from 'react';
import { Form, Checkbox, Text, TextArea } from '../../../utils/xinformed';
import { Button } from 'antd';
import Link from "next/link"




const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class F extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // no need if used arrow function in callback
    this.setFormApi = this.setFormApi.bind(this);
  }
  handleClick(e) {
    this.props.getFormData(this.formAPi.getState())
  }
  setFormApi(formAPi) {
    this.formAPi = formAPi;
  }
  render() {
    return (
      <div>
        <Form getApi={this.setFormApi}>
          <Text field="userName" style={{ marginBottom: 15 }} placeholder="User Name" />
          <Text field="password" style={{ marginBottom: 30 }} placeholder="Password" />
          <div style={{ display: "inline-block", marginBottom: 30, width: "100%" }}>
            <div style={{ float: "left" }}><Checkbox /><label style={{ marginLeft: 10 }}>Remember Password</label></div>
            <div style={{ float: "right" }}><h4>Forgot Password</h4></div>
          </div>
        </Form>
        <div style={{ display: "inline-block", width: "100%" }}>
          <Button style={{ float: "left", width: "45%" }} type="primary" onClick={(e) => this.handleClick(e)}>Log-in</Button>
          <Link as={`/signup`} href={`/signup`}>
            <Button style={{ float: "right", width: "45%", marginLeft: 15 }} >Sign Up</Button>
          </Link>
        </div>
      </div>

    );
  }
}

export default F