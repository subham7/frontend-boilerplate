import React from "react"
import { connect } from "react-redux"
import { user, businesses, auth } from "../../reduxHelper"
import Loading from "./../../components/atoms/loading"
import token from "../token"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // let userID = "3b2d5eae-f7b9-47c8-96b2-c3272992fc1e"

      let tokenData = token.getTokenData()
      console.log(tokenData)
      let userID = tokenData.data.user[0].userID
      let businessID = tokenData.data.business
      // load user if not in state
      if (!this.props.user.response) {
        this.props
          .getUser(userID)
          .then(user => {})
          .catch(err => {})
      }
      // load business if not in state
      if (!this.props.business.response) {
        this.props
          .getBusiness(businessID)
          .then(business => {})
          .catch(err => {})
      }
      if (!this.props.auth.isLoaded) {
        this.props.getAuthData()
      }
    }

    render() {
      if (this.props.user.isLoaded && this.props.business.isLoaded) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Loading />
        // return <h1>sdfg</h1>
      }
    }
  }

  const mapStateToProps = state => ({
    user: state.user,
    business: state.businesses,
    auth: state.auth
  })

  const mapDispatchToProps = dispatch => ({
    getUser: ID => dispatch(user.action(ID)),
    getBusiness: userID => dispatch(businesses.action(userID)),
    getAuthData: () => dispatch(auth.action())
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
