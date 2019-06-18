import React, { Component } from "react"
import { Asearch } from "../../../utils/xinformed/antdesignInformed"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button } from "antd"
import ButtonIcon from "../../atoms/tableButton"

const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : undefined
}

export class F3 extends Component {
  constructor(props) {
    super(props)
    this.state = { hsnCode: [], isLoaded: false }
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    this.loadTaxCategories()
  }

  handleClick() {
    this.props.onSubmit(this.formAPi.getState(), () => {
      
    })
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
  }

  loadTaxCategories = () => {
    this.props.formData
      .assignedhsnCode(this.props.formData.taxID)
      .then(res => {
        console.log(res)
        let hsnCode = []
        res.map(item => {
          hsnCode.push(JSON.parse(item.hsncodeunfold))
        })
        this.setState({ hsnCode: hsnCode })
        console.log(this.state.hsnCode)
        return hsnCode
      })
      .then(_ => {
        this.setState({ isLoaded: true })
      })
      .catch(err => {
        console.log(err)
      })
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
    // console.log(this.props.formData.hsnData)
    return (
      <div className="App">
        <div style={style.container}>
          <h2 style={style.heading}>HSN Assigned</h2>
          {this.state.isLoaded ? (
            <div>
              {this.state.hsnCode.map(item => (
                <p style={style.text}>
                  <ButtonIcon icon="close" style={style.removeBtn} />
                  {"     "}
                  {item.hsnname}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        <Form getApi={this.setFormApi}>
          <div style={{ marginBottom: 15 }}>
            <Select
              field="assignedTo"
              style={{ width: 250 }}
              option={this.props.formData.hsnData}
            />
          </div>
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
