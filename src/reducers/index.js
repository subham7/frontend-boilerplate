import { combineReducers } from "redux"

import * as helperFunctions from "../reduxHelper"


let reducers = {}
Object.keys(helperFunctions).map(functionName =>{
    reducers[functionName] = helperFunctions[functionName].reducer
})


export default combineReducers(reducers)