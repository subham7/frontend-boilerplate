import React, { Component } from "react"
import { connect } from "react-redux"
import { formData } from "./../../../reduxHelper"
import { Form, Checkbox, Text, Select, Date } from "../../../utils/xinformed"
import { ArrayField } from "informed"
import { Button } from "antd"
import { Row, Col } from "antd"

class createPurchase extends Component {
  constructor(props) {
    super(props)
    this.state = { renderReview: false, formValues: {} }
    this.renderReview = this.renderReview.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  async renderReview() {
    // let data = Object.assign({}, this.formAPi.getState()).values
    // this.setState(
    //   {
    //     renderReview: data
    //   },
    //   err => {
    //     console.log("setstate complete createpurchase", this.state)
    //   }
    // )
    let data = this.formAPi.getState().values
    await this.props.formAction(data)

  }

  handleClick() {
    this.props.onSubmit(this.props.form.response.data)
    this.setState({ renderReview: false })
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
  }

  render() {
    const style = {
      margin: { marginBottom: "10px" },
      dynamicForm: { marginTop: "20px", marginBottom: "20px" }
    }

    const initialFormVal = {
      items: [
        {
          cp: "",
          unit: "",
          mrp: "",
          asinstance: ""
        }
      ]
    }

    if(this.props.form.response){
      return (
       
        <div className="App">  
        {/* Example */}
         <p>{this.props.form.response.vendor}</p>
          <div>
            <h1>review</h1>
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
    }else{
      return (
        <div>
        <Form getApi={this.setFormApi} initialValues={initialFormVal}>
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
  
          <div style={style.dynamicForm}>
            <ArrayField field="items">
              {({ add, fields }) => (
                <div>
                  <Button
                    onClick={() => {
                      add()
                    }}
                    style={style.margin}
                  >
                    Add Items
                  </Button>
  
                  {fields.map(({ field, key, remove }, i) => (
                    <label key={key}>
                      <Row gutter={4}>
                        <Col span={6}>
                          <Text
                            field={`${field}.cp`}
                            placeholder="Cost Price"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={6}>
                          <Text
                            field={`${field}.units`}
                            placeholder="Units"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={6}>
                          <Text
                            field={`${field}.mrp`}
                            placeholder="MRP"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={6}>
                          <Text
                            field={`${field}.asinstance`}
                            placeholder="asinstance"
                            value=""
                            style={style.margin}
                          />
                        </Col>
                        <Col span={6}>
                          <Select
                            field={`${field}.product`}
                            option={this.props.formData.product}
                            style={{ width: "100%" }}
                          />
                        </Col>
                        <Col span={12}>
                          <Button onClick={remove}>Remove</Button>
                        </Col>
                      </Row>
                    </label>
                  ))}
                </div>
              )}
            </ArrayField>
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
        </Form>
     
      </div>
      )
    }

  }
}

const mapStateToProps = state => ({
  form: state.formData
})

const mapDispatchToProps = dispatch => ({
  formAction: data => dispatch(formData.action(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createPurchase)
