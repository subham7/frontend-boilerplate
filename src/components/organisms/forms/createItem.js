import React, { Component } from "react"
import {
  Form,
  Text,
  TextArea,
  Select,
  Option,
  RadioGroup,
  Radio
} from "../../../utils/xinformed"
import { Button } from "antd"

const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

function handleChange(value) {
  console.log(`selected ${value}`)
}

export class F2 extends Component {
  state = {
    value: 1
  }

  onChange = e => {
    console.log("radio checked", e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }
  handleClick() {
    console.log(this.formAPi.getState())
    this.props.onSubmit(this.formAPi.getState())
  }
  setFormApi(formAPi) {
    this.formAPi = formAPi
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
              <Text style={{ width: 195 }} field="name" placeholder="Name*" defaultValue={values.name} />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text style={{ width: 195 }} field="code" placeholder="Code*" defaultValue={values.code} />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              {/*<Text
                style={{ width: 195 }}
                field="productcategory"
                placeholder="Product Category"
              />*/}
              <Select
                style={{ width: 195 }}
                field="productcategory"
                option={this.props.formData}
                defaultValue={values.productcategory}
              />
            </div>
          </div>

          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="barcode"
                placeholder=" Barcode*"
                defaultValue={values.barcode}
              />
            </div>
          </div>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="hsncode"
                placeholder="Hsn Code*"
                defaultValue={values.hsncode}
              />
            </div>
          </div>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text style={{ width: 195 }} field="price" placeholder="Price*" defaultValue={values.price} />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              <RadioGroup defaultValue={values.isMRP == 1 ? true : false}>
                <span style={{ 'paddingRight': 10 }} >isMRP</span>
                <Radio value={true} field='isMRP'>Yes</Radio>
                <Radio value={false} field='isMRP'>No</Radio>
              </RadioGroup>
            </div>
          </div>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <h4>Is quantity floatable?</h4>
            <div style={{ float: "left", marginRight: 8 }}>
              <RadioGroup>
                <Radio value={true} field='isQuantityFloatable'>Yes</Radio>
                <Radio value={false} field='isQuantityFloatable'>No</Radio>
              </RadioGroup>
            </div>
          </div>
          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="manufacturer"
                placeholder=" Manufacturer"
                defaultValue={values.manufacturer}
              />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="brand"
                placeholder=" Brand"
                defaultValue={values.brand}
              />
            </div>
          </div>

          <div style={{ display: "inline-block", marginBottom: 15 }}>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="cost"
                placeholder=" Cost"
                defaultValue={values.cost}
              />
            </div>
            <div style={{ float: "left", marginRight: 8 }}>
              <Text
                style={{ width: 195 }}
                field="mrp"
                placeholder=" MRP"
                defaultValue={values.mrp}
              />
            </div>
          </div>

          <TextArea
            field="description"
            rows="3"
            style={{ marginBottom: 15 }}
            placeholder="Item Description:"
            defaultValue={values.description}
          />
          {/* <h5>Include Taxes</h5>
          <div style={{display:"inline-block"}}> 
            <div style={{float:"left"}}>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Yes</Radio><Radio value={2}>No</Radio>
              </RadioGroup>
            </div>
          </div>
          <div style={{display:"inline-block",marginBottom:15}}>
            <div style={{float:"left",marginRight:8}}><Text style={{width:195}} field="p8"  placeholder="Current Quantity" /></div>
            <div style={{float:"left"}}><Text style={{width:195}} field="p9"  placeholder="Low Stock Alert Count"/></div> 
          </div> */}
          <Button style={{ marginBottom: 10 }} type="primary">
            Upload
          </Button>
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

export default F2
