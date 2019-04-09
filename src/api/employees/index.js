import ROOTURL from "../ROOTURL"
import axios from "axios"

export const employees = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`)
