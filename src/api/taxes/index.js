import ROOTURL from "../ROOTURL";
import axios from "axios"


export const taxes = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/taxes`)

export const addTax = (object) => axios.post(`${ROOTURL}/taxes`, object)

export const taxCategories = (urlParams) => axios.get(`${ROOTURL}/businesses/${urlParams.businessID}/taxcategories`)

export const addTaxCategory = (urlParams, object) => axios.post(`${ROOTURL}/businesses/${urlParams.businessID}/taxcategories/${urlParams.taxcategory}/taxes`,object)
