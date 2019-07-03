import ROOTURL from "../ROOTURL";
import axios from "axios"

export const mitems = (businessID) => axios.get(`${ROOTURL}/mitems`)

export const addMitem = (object) => axios.post(`${ROOTURL}/mitems`, object)

export const deleteMitem = (mitemsID) => axios.delete(`${ROOTURL}/mitems/${mitemsID}`)

export const updateMitem = (mitemsID, object) => axios.patch(`${ROOTURL}/mitems/${mitemsID}`, object)