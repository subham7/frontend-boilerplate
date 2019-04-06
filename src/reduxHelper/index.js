import reduxCodeGenerator from "../utils/reduxCodeGenerator"


// Use case
import loginAPI from "../api/login"
import businessAPI , {getBusinesses as getBusinessesAPI} from "../api/business"
import signupAPI from '../api/signup'
import {getUser as getUserAPI} from "../api/users"
import {getLocations as getLocationsAPI, addLocation as addLocationAPI} from "../api/locations"


export const login = reduxCodeGenerator("login", loginAPI)
export const businessSignup = reduxCodeGenerator("bussinessSignup", businessAPI)
export const signup = reduxCodeGenerator("signup", signupAPI)

export const user = reduxCodeGenerator("user", getUserAPI)
export const getLocations = reduxCodeGenerator("locations",getLocationsAPI)
export const addLocation = reduxCodeGenerator("addLocation", addLocationAPI)
export const getBusinesses = reduxCodeGenerator("businesses", getBusinessesAPI)