import ROOTURL from "../ROOTURL";
import axios from "axios"

export const getUserUrl  = ROOTURL + "/users/"
export const getUser = (userID) => axios.get(getUserUrl + userID)