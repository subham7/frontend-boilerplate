import ROOTURL from "../ROOTURL";
import axios from "axios"


export const products = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/products`)

export const addProduct = (businessID, object) => axios.post(`${ROOTURL}/businesses/${businessID}/products`, object)

export const productCategories = (object) => axios.get(``)

export const addProductCategory = (object) => axios.post(``,object)
