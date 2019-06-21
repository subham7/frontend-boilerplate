import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
const loginUrl = ROOTURL + "/weblogin"
export const login = data => axios.post(loginUrl, data)
