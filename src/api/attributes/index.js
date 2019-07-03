import ROOTURL from "../ROOTURL";
import axios from "axios"

export const attributes = (businessID) => axios.get(`${ROOTURL}/attributes`)

export const addAttributes= (object) => axios.post(`${ROOTURL}/attributes`, object)

export const deleteAttributes= (attributesID) => axios.delete(`${ROOTURL}/attributes/${attributesID}`)

export const updateAttributes= (attributesID, object) => axios.patch(`${ROOTURL}/attributes/${attributesID}`, object)
