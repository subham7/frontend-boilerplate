import ROOTURL from "../ROOTURL"
import axios from "axios"

export const taxes = businessID =>
  axios.get(`${ROOTURL}/businesses/${businessID}/taxes`)

export const addTax = (businessID, object) =>
  axios.post(`${ROOTURL}/businesses/${businessID}/taxes`, object)

export const taxCategory = object =>
  axios.get(`https://jsonplaceholder.typicode.com/todos`)

export const addTaxCategory = object => axios.post(``, object)
