import reduxCodeGenerator from "../utils/reduxCodeGenerator"


// Use case
import loginAPI from "../api/login"
export const login = reduxCodeGenerator("login", loginAPI)