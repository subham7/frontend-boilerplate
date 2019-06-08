import React from "react"
import { connect } from "react-redux"
import { locations } from "../../../src/reduxHelper"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if (!this.props.locations.isLoaded) {
        this.loadData()
      }
    }

    loadData() {
      let businessID = this.props.business.response.data.businessID
      this.props.getLocations(businessID)
    }

    render() {
      if (this.props.locations.isLoaded)
        return <WrappedComponent {...this.props} />
      else return <div>Loading...</div>
    }
  }

  const mapStateToProps = state => ({
    business: state.businesses,
    locations: state.locations
  })

  const mapDispatchToProps = dispatch => ({
    getLocations: businessID => dispatch(locations.action(businessID))
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
