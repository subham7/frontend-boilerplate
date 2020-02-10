import ROOTURL from "../ROOTURL";
import axios from "axios"

const getUserUrl  = ROOTURL + "/users/"
export const user = (userID) => axios.get(`${ROOTURL}/users/${userID}`)

export const allUsers = () => axios.get(`${ROOTURL}/users`)

export const uniqueCustomers = (businessID) => axios.get(`${ROOTURL}/uniquecustomers?business=${businessID}`)

export const customerReceipts = (customerID) => axios.get(`${ROOTURL}/users/${customerID}/receipts?_endColumn=customer`)

export const cashReconciliationStatus = (businessID, date) => axios.get(`${ROOTURL}/cr/status?business=${businessID}&date=${date}`)

export const cashReconciliationUpdateCashCollected = (employee,location) => axios.get(`${ROOTURL}/cr/updateCashCollected?employee=${employee}&location=${location}`)

export const cashAllocation = (object) => axios.post(`${ROOTURL}/cr/cashAllocation`, object)

export const cashSubmission = (object) => axios.post(`${ROOTURL}/cr/cashSubmission`, object)