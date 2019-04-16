import React, { Component } from "react"
import { connect } from "react-redux"
import { productCategories } from "../../../../src/reduxHelper"

export default function init(WrappedComponent) {
  class App extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if (!this.props.productCategories.isLoaded) {
        let urlParams = {}
        urlParams.businessID = this.props.businesses.response.data.businessID
        this.props.getProductCategories(urlParams)
      }
    }

    render() {
      if (this.props.productCategories.isLoaded) return <WrappedComponent />
      else return <h1>Loading... </h1>
    }
  }

  const mapStateToProps = state => ({
    businesses: state.businesses,
    productCategories: state.productCategories
  })

  const mapDispatchToProps = dispatch => ({
    getProductCategories: businessID =>
      dispatch(productCategories.action(businessID))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
