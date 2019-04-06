import ROOTURL from '../ROOTURL';
import axios from 'axios'
// API call for signingup of user
const signupURL = ROOTURL + "/users"
export const signup = (userData)=> axios.post(signupURL, userData)