import reduxCodeGenerator from "../utils/reduxCodeGenerator"


// Use case
import loginAPI from "../api/login"
import businessSignupAPI from "../api/businessSignup"


export const login = reduxCodeGenerator("login", loginAPI)
export const businessSignup = reduxCodeGenerator("bussinessSignup", businessSignupAPI)