import React, { Component } from "react"
import { connect } from "react-redux"
import { products, getLocationByID } from "../../../src/reduxHelper"
import Loader from "../../../src/components/atoms/loading"

export default function init(WrappedComponent) {
  class App extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      let businessID = this.props.businesses.response.data[0].businessID
      if (!this.props.products.response) {
        this.props.getProducts(businessID)
      }

      if (!this.props.getLocationByID.response) {
        this.props.getLocationByID(businessID)
      }
    }

    render() {
      if (this.props.products.isLoaded && this.props.blocations.isLoaded)
        return <WrappedComponent {...this.props} />
      else return <Loader />
    }
  }

  const mapStateToProps = state => ({
    businesses: state.businesses,
    blocations: state.getLocationByID,
    products: state.products
  })

  const mapDispatchToProps = dispatch => ({
    getLocationByID: businessID => dispatch(getLocationByID.action(businessID)),
    getProducts: businessID => dispatch(products.action(businessID))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
