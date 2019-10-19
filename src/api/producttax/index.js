import ROOTURL from "../ROOTURL";
import axios from "axios"

export const addProductsTax = (object) => axios.post(`${ROOTURL}/productstaxes`, object);
