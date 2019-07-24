import ROOTURL from "../ROOTURL";
import axios from "axios"


export const locations = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/blocations`)

export const addLocation = (object, headers) => axios.post(`${ROOTURL}/blocations`, object, headers)

export const deleteLocation = (blocationID) => axios.delete(`${ROOTURL}/blocations/${blocationID}`)

export const updateLocation = (blocationID, object, headers) => axios.patch(`${ROOTURL}/blocations/${blocationID}`, object, headers)

export const getLocationByID = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/blocations`)