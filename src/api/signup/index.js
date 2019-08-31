import ROOTURL from '../ROOTURL';
import axios from 'axios'
// API call for signingup of user
const signupURL = ROOTURL + "/websignup"
export const signup = (userData)=> axios.post(signupURL, userData)