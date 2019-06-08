import ROOTURL from "../ROOTURL"
import axios from "axios"

export const hsncodes = () =>axios.get(`${ROOTURL}/hsncodes`)

export const addHsnCode= (object) => axios.post(`${ROOTURL}/hsncodes`, object)

export const deleteHsnCode = (hsncodeID) => axios.delete(`${ROOTURL}/hsncodes/${hsncodeID}`)

export const updateHsnCode = (hsncodeID, object) => axios.patch(`${ROOTURL}/hsncodes/${hsncodeID}`, object)
