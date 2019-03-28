import { combineReducers } from "redux"

import { login } from "../reduxHelper"

export default combineReducers({

    login: login.reducer

})