import React from "react"
import { connect } from "react-redux"
import { taxCategories, hsncodes } from "../../../../src/reduxHelper"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // load taxCategories if not in state
      if (!this.props.taxCategories.response) {
        let urlParams = {}
        urlParams.businessID = this.props.businesses.response.data[0].businessID
        this.props
          .getTaxCategories(urlParams)
          .then(user => {})
          .catch(err => {})
      }
      if (!this.props.hsncodes.response) {
        // let urlParams = {}
        // urlParams.businessID = this.props.businesses.response.data.businessID
        this.props
          .getHsnCodes()
          .then(user => {})
          .catch(err => {})
      }
    }

    render() {
      if (this.props.taxCategories.isLoaded && this.props.hsncodes.isLoaded) {
        return <WrappedComponent {...this.props} />
      } else {
        // taxCategoreis cannot be loaded
        return <h1>Loading</h1>
      }
    }
  }
  const mapStateToProps = state => ({
    taxCategories: state.taxCategories,
    businesses: state.businesses,
    hsncodes: state.hsncodes
  })

  const mapDispatchToProps = dispatch => ({
    getTaxCategories: businessID => dispatch(taxCategories.action(businessID)),
    getHsnCodes: () => dispatch(hsncodes.action()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
