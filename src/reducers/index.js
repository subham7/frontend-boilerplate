import { combineReducers } from "redux"

import { login, businessSignup, signup } from "../reduxHelper"

export default combineReducers({

    login: login.reducer,
    businessSignup: businessSignup.reducer,
    signup: signup.reducer,
})