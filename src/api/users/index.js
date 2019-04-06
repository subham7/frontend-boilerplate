import ROOTURL from "../ROOTURL";
import axios from "axios"

const getUserUrl  = ROOTURL + "/users/"
export const user = (userID) => axios.get(getUserUrl + userID)