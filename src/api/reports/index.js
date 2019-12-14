import ROOTURL from "../ROOTURL";
import axios from "axios"

export const topItems = (location, from, to) => axios.get(`${ROOTURL}/topproducts?location=${location}&from=${from}&to=${to}`)

export const topCategories = (location, from, to) => axios.get(`${ROOTURL}/topproductscategories?location=${location}&from=${from}&to=${to}`)

export const paymentTypes = (location, from, to) => axios.get(`${ROOTURL}/paymentwise?location=${location}&from=${from}&to=${to}`)

export const topSalesman = (business) => axios.get(`${ROOTURL}/topsalesman?business=${business}`)

export const locationSales = (business) => axios.get(`${ROOTURL}/locationsales?business=${business}`)

export const salesDatewise = (business) => axios.get(`${ROOTURL}/datewisetotalsale?business=${business}`)

export const allTransactions = (business, from, to) => axios.get(`${ROOTURL}/alltransactions?business=${business}&from=${from}&to=${to}`)

export const paymentMethods = (blocations, from, to) => axios.get(`${ROOTURL}/paymentMethodReport?blocations=${blocations}&from=${from}&to=${to}`)
export const paymentMethodDetails = (type, blocations, from, to) => axios.get(`${ROOTURL}/paymentMethodDetail?transactiontype=${type}&blocations=${blocations}&from=${from}&to=${to}`)