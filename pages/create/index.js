import React, { Component } from "react"
import { connect } from "react-redux"
import wrapper from "../wrapper"
import { validateBusiness } from "./validate"
// import Loader from "./../../../src/components/atoms/loading"
import AddBusinessMyGoto from "../../src/components/organisms/forms/addBusinessMyGoto"
import CsrTemplate from "../../src/components/templates/csrTemplate"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CsrTemplate
        diplaySearch={false}
        diplayBusinessDetails={true}
        // background={`url(${this.props.myGotoBusinessById.response.data.data.image})`}
        background="#1e4ed6"
        displayFilter={false}
        businessName="Create a Business"
      >
        <AddBusinessMyGoto validate={validateBusiness} />
      </CsrTemplate>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default wrapper(connect(mapStateToProps, mapDispatchToProps)(App))