import ROOTURL from "../ROOTURL";
import axios from "axios"


export const getLocations = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/blocations`)

export const addLocation = (businessID, object) => axios.post(`${ROOTURL}/businesses/${businessID}/blocations`, object)