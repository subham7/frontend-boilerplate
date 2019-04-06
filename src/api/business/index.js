import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
export const url = ROOTURL + "/businesses"
export default data => axios.post(url, data)

export const getBusinesses = userID => axios.get(`${ROOTURL}/users/${userID}/businesses`)