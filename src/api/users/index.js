import ROOTURL from "../ROOTURL";
import axios from "axios"

const getUserUrl  = ROOTURL + "/users/"
export const user = (userID) => axios.get(`${ROOTURL}/users/${userID}`)

export const allUsers = () => axios.get(`${ROOTURL}/users`)

export const uniqueCustomers = (businessID) => axios.get(`${ROOTURL}/uniquecustomers?business=${businessID}`)

export const customerReceipts = (customerID) => axios.get(`${ROOTURL}/users/${customerID}/receipts`)


export const cashReconciliationStatus = (businessID) => axios.get(`${ROOTURL}/cr/status?business=${businessID}`)

export const cashReconciliationStartDay = (object) => axios.post(`${ROOTURL}/cr/startDay`, object)

export const cashReconciliationEndDay = (object) => axios.post(`${ROOTURL}/cr/endDay`, object)

export const cashReconciliationUpdateCashCollected = (employee,location) => axios.get(`${ROOTURL}/cr/updateCashCollected?employee=${employee}&location=${location}`)






