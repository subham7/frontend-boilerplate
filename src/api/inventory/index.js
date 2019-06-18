import ROOTURL from "../ROOTURL"
import axios from "axios"

export const inventoryStock = (businessID) => axios.get(`${ROOTURL}/inventory/bus/${businessID}/compact`)
