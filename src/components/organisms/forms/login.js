import React, { Component } from 'react';
import {Form,Checkbox,Text,TextArea} from '../../../utils/xinformed';
import { Button } from 'antd';




const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class F extends Component {
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
      <div>
        <Form getApi={this.setFormApi}>        
        <Text field="User_name" style={{marginBottom:15}} placeholder="User_nae" />   
        <Text field="Password" style={{marginBottom:30}} placeholder="Password" />
        <div style={{display:"inline-block",marginBottom:30, width:"100%"}}>
            <div style={{float:"left"}}><Checkbox/><label style={{marginLeft:10}}>Remember Password</label></div>
            <div style={{float:"right"}}><h4>Forgot Password</h4></div> 
        </div>
        </Form>
        <div style={{display:"inline-block", width:"100%"}}>
          <Button  style={{float:"left",width:"45%"}}>Log-in</Button>
          <Button  style={{float:"right",width:"45%",marginLeft:15}}  type="primary" onClick={this.handleClick}>Sign Up</Button>
        </div>
      </div>
    );
  }
}

export default F