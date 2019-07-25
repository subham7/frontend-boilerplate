import React, { Component } from "react"
import { Asearch } from "../../../utils/xinformed/antdesignInformed"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { Button } from "antd"
import ButtonIcon from "../../atoms/tableButton"

export class F3 extends Component {
  constructor(props) {
    super(props)
    this.state = { mitem: [], isLoaded: false }
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  componentDidMount() {
    // this.loadMitems()
  }

  handleClick() {
    this.props.onSubmit(this.formAPi.getState(), () => {
      
    })
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
    // this.loadMitems()
  }

  // loadMitems = () => {
  //   this.props.formData
  //     .assignedMitem(this.props.formData.modifierID)
  //     .then(res => {
  //       console.log(res)
  //       let mitem = []
  //       res.map(item => {
  //         mitem.push( (item.mitemunfold))
  //       })
  //       this.setState({ mitem: mitem })
  //       console.log(this.state.mitem)
  //       return mitem
  //     })
  //     .then(_ => {
  //       this.setState({ isLoaded: true })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // } 

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
          <h2 style={style.heading}>Mitems Assigned</h2>
          {this.state.isLoaded ? (
            <div>
              {this.state.mitem.map(item => (
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
          <div style={{ marginBottom: 15 }}>
            <Select
              field="assignedTo"
              style={{ width: 250 }}
              option={this.props.formData.mitemData}
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
