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
        console.log(this.formAPi.getState());
    }
    setFormApi(formAPi){
        this.formAPi = formAPi;
    } 
  render() {
    return (
      <div className="App">
        <Form getApi={this.setFormApi}>
        <h2>Point of Contact Info</h2>
        <Text field="Name:"  style={{marginBottom:15}}  placeholder="Name:" />
        <Text field="email" style={{marginBottom:15}}  placeholder="Email:" />
        <Text field="Phone" style={{marginBottom:15}} placeholder="Phone_number" />   
        <h2>Location Info</h2>
        <Text field="Location Name" style={{marginBottom:15}} placeholder="Location Name" />   
        <Text field="Address Line" style={{marginBottom:15}} placeholder="Address Line" />
        <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="fourth"  placeholder="City" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="fifth"  placeholder="State"/></div> 
          </div>
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="p5"  placeholder="Pin Code" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="p6"  placeholder="Landmark"/></div> 
          </div>
        <TextArea rows="3" placeholder="Bio"/><br />
        <h3>Business Hours</h3>
        <h3>Branding</h3>
        <button type="primary">Upload</button>
        {/* <div style={{display:"inline-block"}}>
            <Button  style={{float:"left",width:192}}>Cancel</Button>
            <Button  style={{float:"left",width:192,marginLeft:15}}  type="primary" onClick={this.handleClick}>Save</Button>
         </div> */}
      </Form>
   </div>
    );
  }
}


export default CreateLocation
