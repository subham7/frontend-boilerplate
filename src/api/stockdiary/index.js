import ROOTURL from "../ROOTURL";
import axios from "axios"

export const stockdiary = () => axios.get(`${ROOTURL}/stockdiary`);