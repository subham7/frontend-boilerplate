import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
// export const url = ROOTURL + "/businesses"
export const url = "https://jsonplaceholder.typicode.com/posts"
export default data => axios.post(url, data)