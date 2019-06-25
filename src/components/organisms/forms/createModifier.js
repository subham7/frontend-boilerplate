import React, { Component } from 'react';
import { Form, Checkbox, Text, RadioGroup, Radio } from '../../../utils/xinformed';
import { Button } from 'antd';



const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class M2 extends Component {
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
    var values;
    this.props.prefilledValues ? values = this.props.prefilledValues : values = {}
    // console.log(values)
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text style={{ width: 195 }} field="name" placeholder="Name" defaultValue={values.name} />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              <RadioGroup defaultValue={values.allowMultiple == 1 ? true : false}>
                <span style={{ 'paddingRight': 10 }} >allowMultiple</span>
                <Radio value={true} field='allowMultiple'>Yes</Radio>
                <Radio value={false} field='allowMultiple'>No</Radio>
              </RadioGroup>
            </div>
          </div>

          <div style={{ display: "inline-block" }}>
            <Button style={{ float: "left", width: 192 }} onClick={this.props.onCancel}>Cancel</Button>
            <Button style={{ float: "left", width: 192, marginLeft: 15 }} type="primary" onClick={this.handleClick}>Save</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default M2

