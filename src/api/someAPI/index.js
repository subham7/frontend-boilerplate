import axios from "axios"
import ROOTURL from "../ROOTURL"

export const getAPI = () => axios.get(`${ROOTURL}/get`)

export const postAPI = (data) => axios.post(`${ROOTURL}/post`, data)
