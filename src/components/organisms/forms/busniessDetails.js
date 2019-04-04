import React, { Component } from 'react';
import {Form,Checkbox,Text,TextArea} from '../../../utils/xinformed';
import { Button } from 'antd';


export class BusinessDetails extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setFormApi = this.setFormApi.bind(this);
    }
    handleClick() {
      this.props.getFormData(this.formAPi.getState());
      // console.log(this.formAPi.getState());
    }
    setFormApi(formAPi){
        this.formAPi = formAPi;
    } 
  render() {
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="name"  placeholder="Business" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="businesstype"  placeholder="Type of Business" /></div> 
          </div>
          <Text field="website"  placeholder="Website" style={{marginBottom:15}}/>
          <Text field="address" placeholder="Address Line 1" style={{marginBottom:15}}/>  
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="city"  placeholder="City" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="state"  placeholder="State"/></div> 
          </div>
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="pincode"  placeholder="Pin Code" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="country"  placeholder="Country"/></div> 
          </div>
         <TextArea rows="3" field="bio" style={{marginBottom:15}} placeholder="Business Bio"/> 
         <h5>Do you accept cards?</h5>
         <div style={{display:"inline-block"}}> 
            <div style={{float:"left"}}><Checkbox style={{margin:10}}field="Yes"/><label>Yes</label></div>
            <div style={{float:"left"}}><Checkbox style={{margin:10}}field="No" /><label>No</label></div>
          </div>
         <h3>Branding</h3>
         <p>Your brand infomration applie to the look and feel of appointments,booking and marketing.</p>
         <div style={{display:"inline-block"}}>
            <Button  style={{float:"left",width:192}}>Cancel</Button>
            <Button  style={{float:"left",width:192,marginLeft:15}}  type="primary" onClick={(e) => this.handleClick(e)}>Save</Button>
         </div>
      </Form>
   </div>
    );
  }
}

export default BusinessDetails