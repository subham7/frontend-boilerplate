import { combineReducers } from "redux"

import { 
    login,
    businessSignup, 
    signup, 
    user,
    getLocations,
    getBusinesses,
    addLocation } from "../reduxHelper"

export default combineReducers({

    login: login.reducer,
    businessSignup: businessSignup.reducer,
    signup: signup.reducer,
    user: user.reducer,
    locations:getLocations.reducer,
    addLocation: addLocation.reducer,
    businesses: getBusinesses.reducer
})