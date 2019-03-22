import React, { Component } from 'react';
import {Form,Checkbox,Text} from '../../../utils/xinformed';
import { Button } from 'antd';




const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}
var items  = ["Apply Discount","Cancel transactions","Change settings","Delete or void saved items in open tickets","Edit items, taxes & inventory",
            "Edit taxes in a sale","Issue refunds","Manage & open cash","Manage all open tickets & Manage customers","View all transactions","View all Deposits","View all reports"];
export class F4 extends Component {
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
          <Text field="email" style={{marginBottom:15}}  placeholder="Email:" />
          <Text field="position" style={{marginBottom:15}} placeholder="Position" />   
          <Text field="user-id" style={{marginBottom:15}} placeholder="User Id" />
          <h5>Passcode</h5>
          <div style={{display:"inline-block",marginBottom:15}}>
             <div className="pass"><Text size="large" field="p1"/></div>
             <div className="pass"><Text size="large" field="p2"/></div>
             <div className="pass"><Text size="large" field="p3"/></div>
             <div className="pass"><Text size="large" field="p4"/></div>
           </div>
          {items.map(item => {
              return <div style={{marginBottom:15}}><label>{item}</label><Checkbox style={{float:"right"}} value={item} /></div>
            })}
            
      </Form>
      <div style={{display:"inline-block"}}>
          <Button  style={{float:"left",width:190}}>Cancel</Button>
          <Button  style={{float:"left",width:190,marginLeft:15}}  type="primary" onClick={this.handleClick}>Save</Button>
       </div>
      </div>
    );
  }
}

export default F4


