import React, { Component } from "react"
import { connect } from "react-redux"
import { formData } from "./../../../reduxHelper"
import { Form, Text, Select, Date } from "../../../utils/xinformed"
import { Field, FieldArray, reduxForm } from "redux-form"
import { Row, Col, Button } from "antd"
import Input from "./../../atoms/input"
import RSelect from "./../../atoms/select"
import Paragraph from "antd/lib/skeleton/Paragraph"

class createPurchase extends Component {
  constructor(props) {
    super(props)
    this.state = { renderReview: false, formValues: {} }
    this.renderReview = this.renderReview.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  async renderReview() {
    let data = this.formAPi.getState().values
    await this.props.formAction(data)
  }

  handleClick() {
    this.props.onSubmit(this.props.form.response)
    this.props.form.response = null
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
  }

  renderItems = ({ fields }) => (
    <div>
      <Button onClick={() => fields.push({})}>Add Items</Button>
      {fields.map((item, index) => (
        <Row gutter={4} key={index}>
          <Col span={6}>
            <Field name={`${item}.cp`} label="Cost Price" component={Input} />
          </Col>
          <Col span={6}>
            <Field name={`${item}.units`} label="Units" component={Input} />
          </Col>
          <Col span={6}>
            <Field name={`${item}.mrp`} label="MRP" component={Input} />
          </Col>
          <Col span={6}>
            <Field
              name={`${item}.product`}
              option={this.props.formData.product}
              label="Products"
              component={RSelect}
            />
          </Col>
          <Col span={6}>
            <Button onClick={() => fields.remove(index)}>Remove</Button>
          </Col>
        </Row>
      ))}
    </div>
  )

  render() {
    const style = {
      margin: { marginBottom: "10px" },
      dynamicForm: { marginTop: "20px", marginBottom: "20px" },
      paragraph: { margin: "0" }
    }

    console.log(this.props.form.response, "this.props.form.response")

    if (this.props.form.response) {
      return (
        <div className="App">
          {/* Example */}
          {console.log(this.props.reduxForm.itemsForm, "sdfgsdfsdfgsdfgsgssd")}
          <div>
            <h1>Review</h1>
            <Row gutter={4}>
              <Col span={12}>
                <p style={style.paragraph}>Vendor</p>
                <h2>{this.props.form.response.vendor}</h2>
              </Col>
              <Col span={12}>
                <p style={style.paragraph}>Vendor</p>
                <h2>{this.props.form.response.vendor}</h2>
              </Col>
              <Col span={24}>
                {this.props.reduxForm.itemsForm.values.items.map(item => (
                  <Row gutter={4}>
                    <Col span={6}>
                      <p style={style.paragraph}>Cost Price</p>
                      <h2>{item.cp}</h2>
                    </Col>
                    <Col span={6}>
                      <p style={style.paragraph}>Cost Price</p>
                      <h2>{item.cp}</h2>
                    </Col>
                    <Col span={6}>
                      <p style={style.paragraph}>Cost Price</p>
                      <h2>{item.cp}</h2>
                    </Col>
                    <Col span={6}>
                      <p style={style.paragraph}>Cost Price</p>
                      <h2>{item.cp}</h2>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            <p />
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
    } else {
      return (
        <div>
          <Form getApi={this.setFormApi}>
            <Text field="vendor" placeholder="Vendor" style={style.margin} />
            <Text
              field="description"
              placeholder="Description"
              style={style.margin}
            />
            <Select
              field="location"
              placeholder="Location"
              option={this.props.formData.location}
              style={style.margin}
            />
            <Date field="date" style={style.margin} />
            <Text field="amount" placeholder="Amount" style={style.margin} />
          </Form>

          {/* Redux form */}
          <div style={style.dynamicForm}>
            <form onSubmit={this.props.handleSubmit}>
              <FieldArray name="items" component={this.renderItems} />
            </form>
          </div>
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
              onClick={this.renderReview}
            >
              Proceed
            </Button>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  form: state.formData,
  reduxForm: state.form
})

const mapDispatchToProps = dispatch => ({
  formAction: data => dispatch(formData.action(data))
})

export default reduxForm({ form: "itemsForm" })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(createPurchase)
)
