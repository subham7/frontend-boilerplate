import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
const loginUrl = ROOTURL + "/login"
export const login = (data) => axios.post(loginUrl, data)