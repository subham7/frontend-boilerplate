import axios from "axios"
import ROOTURL from "./../ROOTURL"

export const addPurchase = data => axios.post(`${ROOTURL}/purchases`, data)

export const reviewPurchase = () =>
  axios.get(
    `${ROOTURL}/purchases?_where=(verified,eq,0)&_unfold={"location":["name"]}`
  )

export const getPurchaseItems = pid =>
  axios.get(
    `${ROOTURL}/purchaseitems?_where=(purchase,eq,${pid})&_unfold={"product":["name"]}`
  )

export const deletePurchase = pid => axios.delete(`${ROOTURL}/purchases/${pid}`)

export const updatePurchase = (pid, data) =>
  axios.patch(`${ROOTURL}/purchases/${pid}`, data)
