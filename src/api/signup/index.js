import ROOTURL from '../ROOTURL';
import axios from 'axios'
// API call for signingup of user
export const signupURL = ROOTURL + "/users"
export default userData => {
    axios.post(signupURL, userData)
}