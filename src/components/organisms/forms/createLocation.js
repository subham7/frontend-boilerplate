import React, { Component } from 'react';
import { Form, Checkbox, Text, TextArea } from '../../../utils/xinformed';
import { Button, Upload, message, Icon } from 'antd';
import axios from 'axios';
import uuidv4 from "uuid/v4"

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

export class CreateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  handleClick() {
    // console.log(this.state.file, "stateeeeeeeeee")
    const formData = new FormData();
    let data = this.formAPi.getState().values
    let details = JSON.stringify(data)
    console.log(details)
    formData.append('file', this.state.file);
    // formData.append('data', details);
    // axios.patch("http://localhost:5000/api/v1/trying/02969910-28d5-499d-873d-62b6d70b18d3", formData, {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // })
    // .then(res => { // then print response status
    //   console.log(res.statusText, "statussssssssss")
    // })
    let obj = {
      textInput: this.formAPi.getState().values,
      fileInput: formData
    }
    this.props.onSubmit(obj)
  }
  handleOnChange = ({ file, fileList }) => {
    if (file.status !== 'uploading') {
      // console.log(file, fileList);
    }
  }
  handleFileUpload = (event) => {
    // console.log(event.target.files, "fileeeeeeeeeee")
    this.setState({ file: event.target.files[0] });
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
          <h2>Point of Contact Info</h2>
          <Text field="pocName" style={{ marginBottom: 15 }} placeholder="Name" defaultValue={values.pocName} />
          <Text field="pocEmail" style={{ marginBottom: 15 }} placeholder="Email" defaultValue={values.pocEmail} />
          <Text field="pocPhone" style={{ marginBottom: 15 }} placeholder="Phone number" defaultValue={values.pocPhone} />
          <h2>Location Info</h2>
          <Text field="name" style={{ marginBottom: 15 }} placeholder="Location Name" defaultValue={values.name} />
          <Text field="latitude" style={{ marginBottom: 15 }} placeholder="Latitude" defaultValue={values.latitude} />
          <Text field="longitude" style={{ marginBottom: 15 }} placeholder="Longitue" defaultValue={values.longitude} />
          <Text field="address" style={{ marginBottom: 15 }} placeholder="Address Line" defaultValue={values.address} />
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}><Text style={{ width: 195 }} field="city" placeholder="City" defaultValue={values.city} /></div>
            <div style={{ float: "left" }}><Text style={{ width: 195 }} field="state" placeholder="State" defaultValue={values.state} /></div>
          </div>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}><Text style={{ width: 195 }} field="pincode" placeholder="Pin Code" defaultValue={values.pincode} /></div>
            <div style={{ float: "left" }}><Text style={{ width: 195 }} field="landmark" placeholder="Landmark" defaultValue={values.landmark} /></div>
          </div>
          <TextArea field="bio" rows="3" placeholder="Bio" defaultValue={values.bio} /><br />
          <h3>Business Hours</h3>
          <h3>Branding</h3>
          <form onSubmit={this.submitFile} >
            <input type='file' onChange={this.handleFileUpload} />
          </form>
          <br />
          <br />
          <div style={{ display: "inline-block" }}>
            <Button style={{ float: "left", width: 192 }} onClick={this.props.onCancel}>Cancel</Button>
            <Button style={{ float: "left", width: 192, marginLeft: 15 }} type="primary" onClick={this.handleClick}>Save</Button>
          </div>
        </Form>
      </div>
    );
  }
}


export default CreateLocation
