import ROOTURL from "../ROOTURL";
import axios from "axios"

export const modifieruse = () => axios.get(`${ROOTURL}/modifieruse`);