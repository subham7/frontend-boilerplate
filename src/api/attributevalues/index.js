import ROOTURL from "../ROOTURL";
import axios from "axios"

export const attributevalues = (businessID) => axios.get(`${ROOTURL}/attributevalues`)

export const addAttributeValues= (object) => axios.post(`${ROOTURL}/attributevalues`, object)

export const deleteAttributeValues= (attributevaluesID) => axios.delete(`${ROOTURL}/attributevalues/${attributevaluesID}`)

export const updateAttributeValues= (attributevaluesID, object) => axios.patch(`${ROOTURL}/attributevalues/${attributevaluesID}`, object)

export const attributeName = (attributevaluesID) => axios.get(`${ROOTURL}/attributevalues?_where=(attributevalueID,eq,${attributevaluesID})&_unfold={"attribute":["name"]}`)
