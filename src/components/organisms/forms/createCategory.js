import React, { Component } from 'react';
import {Form,Checkbox,Text,TextArea} from '../../../utils/xinformed';
import { Button } from 'antd';




const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class F6 extends Component {
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
      <Text field="Category name" style={{marginBottom:15}} placeholder="Category name" />
      {/* <div style={{display:"inline-block"}}>
            <Button  style={{float:"left",width:192}}>Cancel</Button>
            <Button  style={{float:"left",width:192,marginLeft:15}}  type="primary" onClick={this.handleClick}>Save</Button>
         </div> */}
      </Form>
   </div>
    );
  }
}


export default F6