import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
const url = ROOTURL + "/businesses"
export const addBusiness = data => axios.post(url, data)

export const businesses = businessID =>
  axios.get(`${ROOTURL}/businesses/${businessID}`)

export const allBusinesses = businessID =>
  axios.get(`${ROOTURL}/businesses`)

export const getBusinessById = businessID =>
  axios.get(`${ROOTURL}/businesses/${businessID}`)

export const businessTransactions = businessID => axios.get(`${ROOTURL}/businesses/${businessID}/transactions?_unfold={%22transactiontype%22:[%22name%22],%22customer:tickets%22:[%22firstName%22],%22employee:tickets%22:[%22firstName%22]}&_sortColumn=date&_order=desc&_fields=transactions.*,tickets.device`)

export const businessType = () => axios.get(`${ROOTURL}/businesstype`)

export const updateBusinesses = (businessID, object) => axios.patch(`${ROOTURL}/businesses/${businessID}`, object)