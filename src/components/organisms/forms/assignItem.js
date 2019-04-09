import React, { Component } from 'react';
import {Asearch} from '../../../utils/xinformed/antdesignInformed';
import {Form,Checkbox, Text} from '../../../utils/xinformed';
import { Button } from 'antd';



var items  = ["Biscuits","Drinks","Fries","Breads","Fries","Breads"]
const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class F3 extends Component {
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
       <Text field="location" style={{marginBottom:15}} placeholder="Location" />
       {/* <div style={{display:"inline-block",marginBottom:15}}>
          <div style={{float:"left"}}><Asearch placeholder="Get ready to become fat"/></div>
          <div style={{float:"left",marginTop:5,marginLeft:8}}><label>All</label><Checkbox field="Yes"/></div>
       </div>
     
       {items.map(item => {
              return <div style={{marginBottom:15}}><label>{item}</label><Checkbox style={{float:"right"}} value={item} /></div>
            })} */}
      </Form>
      <div style={{display:"inline-block"}}>
          <Button  style={{float:"left",width:192}} onClick={this.props.onCancel}>Cancel</Button>
          <Button  style={{float:"left",width:192,marginLeft:15}}  type="primary" onClick={this.handleClick}>Save</Button>
       </div>
      </div>
    );
  }
}

export default F3;