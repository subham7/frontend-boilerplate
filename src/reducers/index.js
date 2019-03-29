import { combineReducers } from "redux"

import { login, businessSignup } from "../reduxHelper"

export default combineReducers({

    login: login.reducer,
    businessSignup: businessSignup.reducer

})