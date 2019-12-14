import React from "react"
import { connect } from "react-redux"
import { locations, productCategories } from "../../../src/reduxHelper"
import Loading from "./../../../src/components/atoms/loading"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if (!this.props.locations.isLoaded || !this.props.productCategories.isLoaded) {
        this.loadData()
      }
    }

    loadData() {
      let businessID = this.props.business.response.data[0].businessID
      let obj = {
        businessID: businessID
      }
      this.props
        .getLocations(businessID)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      this.props
        .getProductCategory(obj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
      if (this.props.locations.isLoaded && this.props.productCategories.isLoaded)
        return <WrappedComponent {...this.props} />
      else return <Loading />
    }
  }

  const mapStateToProps = state => ({
    business: state.businesses,
    locations: state.locations,
    productCategories: state.productCategories
  })

  const mapDispatchToProps = dispatch => ({
    getLocations: businessID => dispatch(locations.action(businessID)),
    getProductCategory: businessID => dispatch(productCategories.action(businessID))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
