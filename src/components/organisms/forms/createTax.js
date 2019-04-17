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
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="name"
                placeholder="Tax Name"
              />
            </div>
            <div style={{ float: "left" }}>
              <Text
                style={{ width: 195 }}
                field="percentage"
                placeholder="Percentage"
              />
            </div>
          </div>
          {/*<div style={{marginBottom:15}}><Text style={{width:195}} field="taxcategory"  placeholder="Tax Category" /></div>*/}

          <div style={{ marginBottom: 15 }}>
            <Select
              field="taxcategory"
              style={{ width: 195 }}
              option={this.props.formData}
            />
          </div>

          {/* <h5>Include in MRP:</h5>
          <div style={{display:"inline-block"}}> 
            <div style={{float:"left"}}><Checkbox style={{margin:10}}field="Yes"/><label>Yes</label></div>
            <div style={{float:"left"}}><Checkbox style={{margin:10}}field="No" /><label>No</label></div>
          </div>
          <div style={{display:"inline-block"}}>
          <div style={{float:"left",width:352}}><h5>Locations:</h5></div>
          <div style={{float:"left",marginLeft:8,width:40}}><label>All</label><Checkbox style={{float:"right"}} field="All"/></div>
          </div>
          <div style={{marginBottom:15}}><label>Bangalore</label><Checkbox style={{float:"right"}} field="Bangalore" /></div>
          <div style={{marginBottom:15}}><label>Hyderabad</label><Checkbox style={{float:"right"}} field="Hyderabad" /></div>
          <div style={{marginBottom:15}}><label>Kolkata</label><Checkbox   style={{float:"right"}} field="Kolkata" /></div>
          <div style={{marginBottom:15}}><label>Bhubaneswar</label><Checkbox style={{float:"right"}} field="Bhubaneswar"/></div> */}

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
