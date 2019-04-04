import reduxCodeGenerator from "../utils/reduxCodeGenerator"


// Use case
import loginAPI from "../api/login"
import businessAPI from "../api/business"
import signupAPI from '../api/signup'
import {getUser as getUserAPI} from "../api/users"


export const login = reduxCodeGenerator("login", loginAPI)
export const businessSignup = reduxCodeGenerator("bussinessSignup", businessAPI)
export const signup = reduxCodeGenerator("signup", signupAPI)
export const user = reduxCodeGenerator("user", getUserAPI)