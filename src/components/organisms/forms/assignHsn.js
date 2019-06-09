import React, { Component } from 'react';
import { Asearch } from '../../../utils/xinformed/antdesignInformed';
import { Form, Checkbox, Text, Select } from '../../../utils/xinformed';
import { Button } from 'antd';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class F3 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }
  handleClick() {
    this.props.onSubmit(this.formAPi.getState())
  }
  setFormApi(formAPi) {
    this.formAPi = formAPi;
  }
  render() {
    let sdata = [{ "name": "GST101", "value": "2246ef07-2cbe-496b-af7e-ac88b5d3235e" }, { "name": "GST14", "value": "236688b8-59ce-11e9-9666-f8cab8258ec4" }, { "name": "GST18", "value": "3e3b74ce-59ce-11e9-9666-f8cab8258ec4" }, { "name": "GST25", "value": "a6d46a94-e5da-48f1-852b-388144870168" }, { "name": "GST52", "value": "d6f7613b-7d1e-4a01-8383-984b8784d453" }]
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <div style={{ marginBottom: 15 }}>
            <Select
              field="assignedTo"
              style={{ width: 250 }}
              option={this.props.formData.taxCategoryData}
            />
          </div>
        </Form>
        <div style={{ display: "inline-block" }}>
          <Button style={{ float: "left", width: 192 }} onClick={this.props.onCancel}>Cancel</Button>
          <Button style={{ float: "left", width: 192, marginLeft: 15 }} type="primary" onClick={this.handleClick}>Save</Button>
        </div>
      </div>
    );
  }
}

export default F3;