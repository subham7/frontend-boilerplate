import ROOTURL from "../ROOTURL";
import axios from "axios"


export const products = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/products`)

// export const addProduct = (businessID, object) => axios.post('https://jsonplaceholder.typicode.com/posts', object)
export const addProduct = (businessID, object) => axios.post(`${ROOTURL}/businesses/${businessID}/products`, object)

export const productCategories = (object) => axios.get(`https://jsonplaceholder.typicode.com/users`)

export const addProductCategory = (businessID, object) => axios.post(`https://jsonplaceholder.typicode.com/posts`,object)
