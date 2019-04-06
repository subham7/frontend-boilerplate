import React, { Component } from 'react';
import {Form,Checkbox,Text,TextArea} from '../../../utils/xinformed';
import { Button } from 'antd';


const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class CreateLocation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setFormApi = this.setFormApi.bind(this);
    }
    handleClick() {
        this.props.onSubmit(this.formAPi.getState())
    }
    setFormApi(formAPi){
        this.formAPi = formAPi;
    } 
  render() {
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
        <h2>Point of Contact Info</h2>
        <Text field="pocName"  style={{marginBottom:15}}  placeholder="Name" />
        <Text field="pocEmail" style={{marginBottom:15}}  placeholder="Email" />
        <Text field="pocPhone" style={{marginBottom:15}} placeholder="Phone number" />   
        <h2>Location Info</h2>
        <Text field="name" style={{marginBottom:15}} placeholder="Location Name" />   
        <Text field="latitude" style={{marginBottom:15}} placeholder="Latitude" />
        <Text field="longitude" style={{marginBottom:15}} placeholder="Longitue" />
        <Text field="address" style={{marginBottom:15}} placeholder="Address Line" />
        <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="city"  placeholder="City" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="state"  placeholder="State"/></div> 
          </div>
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="pincode"  placeholder="Pin Code" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="landmark"  placeholder="Landmark"/></div> 
          </div>
        <TextArea field="bio" rows="3" placeholder="Bio"/><br />
        <h3>Business Hours</h3>
        <h3>Branding</h3>
        <button type="primary">Upload</button>
        <br/>
        <br/>
        <div style={{display:"inline-block"}}>
            <Button  style={{float:"left",width:192}} onClick={this.props.onCancel}>Cancel</Button>
            <Button  style={{float:"left",width:192,marginLeft:15}}  type="primary" onClick={this.handleClick}>Save</Button>
         </div>
      </Form>
   </div>
    );
  }
}


export default CreateLocation
