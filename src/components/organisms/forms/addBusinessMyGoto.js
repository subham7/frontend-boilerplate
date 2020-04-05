import React, { Component } from "react"
import { connect } from "react-redux"
import {
  createMyGotoBusiness,
  getMyGotoBusiness,
  cityMyGoto
} from "./../../../reduxHelper"
import { Form, Checkbox, Text, Date, TextArea } from "../../../utils/xinformed"
import { ArrayField } from "informed"
import { Button, Row, Col, Select, message, Radio } from "antd"
import Loader from "./../../atoms/loading"
import Router from "next/router"
const { Option } = Select

class addBusinessMyGoto extends Component {
  constructor(props) {
    super(props)
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
    this.state = {
      loading: false,
      file: null,
      state: undefined,
      city: undefined,
      is_owner: false,
      discount: undefined,
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
        "Odisha",
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
    this.setState({ loading: true })

    let data = this.formAPi.getState().values
    data["city"] = this.state.city
    data["state"] = this.state.state
    data["is_owner"] = this.state.is_owner
    data["discount"] = this.state.discount

    this.props
      .validate(data)
      .then(validate => {
        if (validate === "validate") {
          data["phone"] = data["phone"].toString()

          //data["creator_phone"] = data["creator_phone"].toString()
          let formData = new FormData()
          let details = JSON.stringify(data)

          // formData.append("file", this.state.file)
          formData.append("data", details)
          // console.log(...formData)

          this.props
            .createMyGotoBusiness(data)
            .then(res => {
              message.success("Your business is successfully added.")
              //this.props.onSubmit()
              this.setState({ loading: false })
              console.log(res.data.businessID)
              Router.push(`/business?bid=${res.data.businessID}`)
            })
            .catch(err => {
              message.error("Some problem occured. Please try again.")
              this.setState({ loading: false })
            })
        }
      })
      .catch(err => {
        this.setState({ loading: false })
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
      })
  }

  cityFocus = () => {
    this.props.cityMyGoto(this.state.state)
  }

  handleDiscount = discount => {
    this.setState({ discount: discount.target.value })
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
              <label>Locality</label>
              <Text field="locality" style={style.field} />
            </Col>
            <Col sm={8}>
              {" "}
              <label>Address of Business</label>
              <Text field="address" style={style.field} />
            </Col>
            {/* <Col sm={8}>
              <label>Pic *</label>
              <br />
              <input type="file" onChange={this.handleFileUpload} />
            </Col> */}
            <Col sm={8}></Col>
            <Col sm={24}>
              {" "}
              <label>Description</label>
              <TextArea field="description" rows="3" style={style.field} />
            </Col>
          </Row>

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
            <Col sm={24}>
              {this.state.is_owner ? (
                <div>
                  <label>
                    Would you like to offer discount to your customers?
                    (Optional)
                  </label>
                  <Radio.Group
                    defaultValue="a"
                    buttonStyle="solid"
                    style={style.field}
                    onChange={this.handleDiscount}
                  >
                    <Radio.Button value="15">15%</Radio.Button>
                    <Radio.Button value="20">20%</Radio.Button>
                    <Radio.Button value="25">25%</Radio.Button>
                    <Radio.Button value="30">30%</Radio.Button>
                    <Radio.Button value="40">40%</Radio.Button>
                    <Radio.Button value="50">50%</Radio.Button>
                  </Radio.Group>
                </div>
              ) : null}
            </Col>
          </Row>

          <br />
          <Button
            style={{
              float: "left",
              width: 192,
              marginBottom: "20px",
              background: "#1E4ED6",
              color: "#fff"
            }}
            shape="round"
            onClick={this.handleClick}
            loading={this.state.loading}
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
