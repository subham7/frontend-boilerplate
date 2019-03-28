import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
export const loginUrl = ROOTURL + "/login_test"
export default userData => axios.post(loginUrl, userData)