import ROOTURL from "../ROOTURL";
import axios from "axios"

//Products APIs
export const products = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/products`)

export const addProduct = (object) => axios.post(`${ROOTURL}/products`, object)

export const deleteProduct = (urlParams) => axios.delete(`${ROOTURL}/products/${urlParams.productID}`)

export const updateProduct = (productID, object) => axios.patch(`${ROOTURL}/products/${productID}`, object)

//Product Category APIs
export const productCategories = (urlParams) => axios.get(`${ROOTURL}/businesses/${urlParams.businessID}/productcategories`)

export const addProductCategory = (object) => axios.post(`${ROOTURL}/productcategories`,object)

export const deleteProductCategory = (productcategoryID) => axios.delete(`${ROOTURL}/productcategories/${productcategoryID}`)

export const updateProductCategory = (productcategoryID, object) => axios.patch(`${ROOTURL}/productcategories/${productcategoryID}`, object)

