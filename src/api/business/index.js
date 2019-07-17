import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
const url = ROOTURL + "/businesses"
export const addBusiness = data => axios.post(url, data)

export const businesses = businessID =>
  axios.get(`${ROOTURL}/businesses/${businessID}`)

export const getBusinessById = businessID =>
  axios.get(`${ROOTURL}/businesses/${businessID}`)

export const businessTransactions = businessID => axios.get(`${ROOTURL}/businesses/${businessID}/transactions?_unfold={"transactiontype":["name"]}`)
