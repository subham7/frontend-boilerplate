import { combineReducers } from "redux"
import * as helperFunctions from "../reduxHelper"

// Redux-Form
import { reducer as formReducer } from "redux-form"

let reducers = {
  // Redux-form
  form: formReducer
}
Object.keys(helperFunctions).map(functionName => {
  reducers[functionName] = helperFunctions[functionName].reducer
})

export default combineReducers(reducers)
