import ROOTURL from "../ROOTURL"
import axios from "axios"

export const hsncodes = () => axios.get(`${ROOTURL}/hsncodes`)

export const addHsnCode = object => axios.post(`${ROOTURL}/hsncodes`, object)

export const deleteHsnCode = hsncodeID =>
  axios.delete(`${ROOTURL}/hsncodes/${hsncodeID}`)

export const updateHsnCode = (hsncodeID, object) =>
  axios.patch(`${ROOTURL}/hsncodes/${hsncodeID}`, object)

export const addhsncodetaxcategories = object =>
  axios.post(`${ROOTURL}/hsncodetaxcategories`, object)

export const taxCategoryHsn = hsnID =>
  axios.get(
    `${ROOTURL}/hsncodetaxcategories?_where=(hsncode,eq,${hsnID})&_unfold={"taxcategory":["name"]}`
  )
