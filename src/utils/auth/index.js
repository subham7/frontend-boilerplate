import React from "react"
import { connect } from "react-redux"
import jwt from "jsonwebtoken"

const Auth = ({ auth, param, yes, no }) => {
  const rules = jwt.decode(auth.response)
  if (rules.data.permissions[param]) return yes
  else return no
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Auth)
