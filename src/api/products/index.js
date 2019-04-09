import ROOTURL from "../ROOTURL";
import axios from "axios"


export const products = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/products`)

export const addProduct = (object) => axios.post(`${ROOTURL}/products`, object)

export const productCategories = (urlParams) => axios.get(`${ROOTURL}/businesses/${urlParams.businessID}/productcategories`)

export const addProductCategory = (object) => axios.post(`${ROOTURL}/productcategories`,object)