import React, { Component } from "react"
import { connect } from "react-redux"
import {
  createMyGotoBusiness,
  getMyGotoBusiness,
  cityMyGoto
} from "./../../../reduxHelper"
import { Form, Checkbox, Text, Date, TextArea } from "../../../utils/xinformed"
import { ArrayField } from "informed"
import { Button, Row, Col, Select, message } from "antd"
import Loader from "./../../atoms/loading"
const { Option } = Select

class addBusinessMyGoto extends Component {
  constructor(props) {
    super(props)
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
    this.state = {
      file: null,
      state: "",
      city: "",
      is_owner: "",
      cityArr: [{ City: "", State: "", District: "" }],
      stateArr: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Orissa",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
      ]
    }
  }

  handleClick() {
    let data = this.formAPi.getState().values
    data["city"] = this.state.city
    data["state"] = this.state.state
    data["is_owner"] = this.state.is_owner

    this.props
      .validate(data, this.state.file)
      .then(validate => {
        if (validate === "validate") {
          data["phone"] = data["phone"].toString()
          //data["creator_phone"] = data["creator_phone"].toString()
          let formData = new FormData()
          let details = JSON.stringify(data)

          formData.append("file", this.state.file)
          formData.append("data", details)
          console.log(...formData)

          this.props
            .createMyGotoBusiness(formData)
            .then(data => {
              console.log(data)
              message.success("Your business is successfully added.")
              //this.props.onSubmit()
            })
            .catch(err => {
              console.log(err)
              message.error("Some problem occured. Please try again.")
              console.log(err)
            })
        }
      })
      .catch(err => {
        message.error("" + err)
        //this.setState({ apiRequestLoading: false })
      })
  }

  handleFileUpload = event => {
    this.setState({ file: event.target.files[0] })
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
  }

  handleSelect = (value, name) => {
    this.setState({ [name]: value })
    if (name === "state")
      this.props.cityMyGoto(value).then(_ => {
        this.setState({ cityArr: this.props.cityMyGotoData.response.data })
        console.log(this.props.cityMyGotoData.response.data)
      })
  }

  cityFocus = () => {
    this.props.cityMyGoto(this.state.state)
  }

  render() {
    const style = {
      field: {
        width: "100%"
      },
      container: {
        marginBottom: "50px"
      }
    }

    return (
      <Form getApi={this.setFormApi}>
        <div style={style.container}>
          <h1>Business Details</h1>
          <Row gutter={[16, 16]}>
            <Col sm={8}>
              <label>Business Name *</label>
              <Text field="name" style={style.field} />
            </Col>
            <Col sm={8}>
              <label>Business Email *</label>
              <Text field="email" style={style.field} />
            </Col>
            <Col sm={8}>
              {" "}
              <label>Business Phone *</label>
              <Text type="number" field="phone" style={style.field} />
            </Col>
            <Col sm={8}>
              <label>State *</label>
              <Select
                showSearch
                onChange={value => this.handleSelect(value, "state")}
                style={style.field}
              >
                {this.state.stateArr.map(item => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </Col>
            <Col sm={8}>
              <label>City *</label>
              <Select
                showSearch
                onChange={value => this.handleSelect(value, "city")}
                style={style.field}
              >
                {this.state.cityArr.map(item => {
                  return <Option value={item.City}>{item.City}</Option>
                })}
              </Select>
            </Col>
            <Col sm={8}>
              {" "}
              <label>Locality *</label>
              <Text field="locality" style={style.field} />
            </Col>
            <Col sm={8}>
              {" "}
              <label>Address of Business *</label>
              <Text field="address" style={style.field} />
            </Col>
            <Col sm={8}>
              <label>Pic *</label>
              <br />
              <input type="file" onChange={this.handleFileUpload} />
            </Col>
            <Col sm={8}></Col>
            <Col sm={24}>
              {" "}
              <label>Description</label>
              <TextArea field="description" rows="3" style={style.field} />
            </Col>
          </Row>

          <br />
          <br />
          <hr />
          <br />
          <br />
          <h1>Personal Details</h1>
          <Row gutter={[16, 16]}>
            <Col sm={8}>
              {" "}
              <label>Your Name</label>
              <Text field="creator_name" style={style.field} />
            </Col>
            <Col sm={8}>
              {" "}
              <label>Your Email</label>
              <Text field="creator_email" style={style.field} />
            </Col>
            <Col sm={8}>
              {" "}
              <label>Your Phone</label>
              <Text type="number" field="creator_phone" style={style.field} />
            </Col>
            <Col sm={8}>
              <label>Are you the owner of this business? *</label>
              <Select
                onChange={value => this.handleSelect(value, "is_owner")}
                style={style.field}
              >
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>
            </Col>
          </Row>

          <br />
          <Button
            style={{
              float: "left",
              width: 192,
              marginBottom: "20px"
            }}
            onClick={this.handleClick}
          >
            Create
          </Button>
          <br />
        </div>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  myGotoBusiness: state.getMyGotoBusiness,
  cityMyGotoData: state.cityMyGoto
})

const mapDispatchToProps = dispatch => ({
  getMyGotoBusiness: () => dispatch(getMyGotoBusiness.action()),
  createMyGotoBusiness: data => dispatch(createMyGotoBusiness.action(data)),
  cityMyGoto: state => dispatch(cityMyGoto.action(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(addBusinessMyGoto)
