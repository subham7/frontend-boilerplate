import React, { Component } from "react"
import { Asearch } from "../../../utils/xinformed/antdesignInformed"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button, Icon } from "antd"
import ButtonIcon from "../../atoms/tableButton"

var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"]
const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class F3 extends Component {
  constructor(props) {
    super(props)
    this.state = { location: [], isLoaded: false }
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    this.loadLoacation()
  }

  handleClick() {
    this.props.onSubmit(this.formAPi.getState())
  }

  loadLoacation = () => {
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
        return location
      })
      .then(_ => {
        this.setState({ isLoaded: true })
      })
      .catch(err => console.log(err))
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
    this.loadLoacation()
  }

  handleChange(value) {
    console.log(value);
  }


  render() {
    const style = {
      container: { marginBottom: "20px" },
      heading: { marginBottom: "2px" },
      text: { marginBottom: "5px" },
      removeBtn: {
        fontSize: "10px",
        height: "16px",
        width: "28px",
        marginRight: "10px"
      }
    }

    return (
      <div className="App">
        <div style={style.container}>
          <h2 style={style.heading}>Locations Assigned</h2>

          {this.state.isLoaded ? (
            <div>
              {this.state.location.map(item => (
                <p style={style.text}>
                  <ButtonIcon icon="close" style={style.removeBtn} />
                  {"     "}
                  {item.name}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <Form getApi={this.setFormApi}>
          <Select
            field="location"
            mode="multiple"
            option={this.props.formData.locationData}
            style={{ marginBottom: 15, width: '50%' }}
            onChange={this.handleChange}
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
