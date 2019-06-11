import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const addPurchase = data => axios.post(`${ROOTURL}/purchase`, data)
