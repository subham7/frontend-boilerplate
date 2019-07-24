import React, { Component } from "react"
import { Asearch } from "../../../utils/xinformed/antdesignInformed"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button, Icon } from "antd"
import ButtonIcon from "../../atoms/tableButton"

var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"]

export class F3 extends Component {
  constructor(props) {
    super(props)
    this.state = { attribute: [], isLoaded: false }
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    this.loadAttributes()
  }

  handleClick() {
    this.props.onSubmit(this.formAPi.getState())
  }

  loadAttributes = () => {
    this.props.formData
      .assignedAttribute(this.props.formData.attributesetID)
      .then(res => {
        let attribute = []
        res.map(item => {
          attribute.push( (item.attributeunfold))
        })
        this.setState({ attribute: attribute })
        return attribute
      })
      .then(_ => {
        this.setState({ isLoaded: true })
      })
      .catch(err => console.log(err))
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
    this.loadAttributes()
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
    // console.log(this.props.formData.attributeData, "createeeeeeeeee")
    return (
      <div className="App">
        <div style={style.container}>
          <h2 style={style.heading}>Attributes Assigned</h2>

          {this.state.isLoaded ? (
            <div>
              {this.state.attribute.map(item => (
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
            field="assignedTo"
            mode="multiple"
            option={this.props.formData.attributeData}
            style={{ marginBottom: 15, width: '50%' }}
            onChange={this.handleChange}
          />
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
