import React, { Component } from "react"
import { Asearch } from "../../../utils/xinformed/antdesignInformed"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button } from "antd"

var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"]
const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class F3 extends Component {
  constructor(props) {
    super(props)
    this.state = { location: [] }
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    this.props.formData
      .employeeLocation({
        userID: this.props.formData.employeeID
      })
      .then(res => {
        let location = []
        res.map(item => {
          location.push(JSON.parse(item.locationunfold))
        })
        this.setState({ location: location })
      })
      .catch(err => console.log(err))
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
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "2px" }}>Locations Assigned</h2>
          <div>
            {this.state.location.map(item => (
              <p style={{ marginBottom: "2px" }}>{item.name}</p>
            ))}
          </div>
        </div>
        <Form getApi={this.setFormApi}>
          <Select
            field="location"
            option={this.props.formData.locationData}
            style={{ marginBottom: 15 }}
          />
          {/* <div style={{display:"inline-block",marginBottom:15}}>
          <div style={{float:"left"}}><Asearch placeholder="Get ready to become fat"/></div>
          <div style={{float:"left",marginTop:5,marginLeft:8}}><label>All</label><Checkbox field="Yes"/></div>
       </div>
     
       {items.map(item => {
              return <div style={{marginBottom:15}}><label>{item}</label><Checkbox style={{float:"right"}} value={item} /></div>
            })} */}
        </Form>
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
      </div>
    )
  }
}

export default F3
