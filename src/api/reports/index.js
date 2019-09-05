import ROOTURL from "../ROOTURL";
import axios from "axios"

export const topItems = (location, from, to) => axios.get(`${ROOTURL}/topproducts?location=${location}&from=${from}&to=${to}`)

export const topCategories = (location, from, to) => axios.get(`${ROOTURL}/topproductscategories?location=${location}&from=${from}&to=${to}`)

export const paymentTypes = (location, from, to) => axios.get(`${ROOTURL}/paymentwise?location=${location}&from=${from}&to=${to}`)