import ROOTURL from "../ROOTURL";
import axios from "axios"


export const locations = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/blocations`)

export const addLocation = (object) => axios.post(`${ROOTURL}/blocations`, object)

export const deleteLocation = (blocationID) => axios.delete(`${ROOTURL}/blocations/${blocationID}`)

export const updateLocation = (blocationID, object) => axios.patch(`${ROOTURL}/blocations/${blocationID}`, object)

export const getLocationByID = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/blocations`)