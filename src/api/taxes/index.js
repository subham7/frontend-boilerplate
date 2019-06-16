import ROOTURL from "../ROOTURL"
import axios from "axios"

export const taxes = businessID =>axios.get(`${ROOTURL}/businesses/${businessID}/taxes`)

export const addTax = (object) => axios.post(`${ROOTURL}/taxes`, object)

export const deleteTax = (taxID) => axios.delete(`${ROOTURL}/taxes/${taxID}`)

export const updateTax = (taxID, object) => axios.patch(`${ROOTURL}/taxes/${taxID}`, object)

export const taxCategories = (urlParams) => axios.get(`${ROOTURL}/businesses/${urlParams.businessID}/taxcategories`)

export const addTaxCategory = (object) => axios.post(`${ROOTURL}/taxcategories`,object)

export const deleteTaxCategory = (taxCategoryID) => axios.delete(`${ROOTURL}/taxcategories/${taxCategoryID}`)

export const updateTaxCategory = (taxCategoryID, object) => axios.patch(`${ROOTURL}/taxcategories/${taxCategoryID}`,object)

export const hsnTaxcategory = taxCategoryID =>
  axios.get(
    `${ROOTURL}/hsncodetaxcategories?_where=(taxcategory,eq,${taxCategoryID})&_unfold={"hsncode":["hsnname"]}`
  )