import ROOTURL from '../ROOTURL';
import axios from 'axios'
// API call for signingup of user
// export const signupURL = ROOTURL + "/login_test"
export const signupURL = "https://jsonplaceholder.typicode.com/posts"
export default userData => axios.post(signupURL, userData)