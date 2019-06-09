import ROOTURL from "../ROOTURL"
import axios from "axios"

export const employees = urlParams =>
  axios.get(`${ROOTURL}/businesses/${urlParams.businessID}/users`)

export const addEmployee = object => axios.post(`${ROOTURL}/users`, object)

export const deleteEmployee = employeeID =>
  axios.delete(`${ROOTURL}/users/${employeeID}`)

export const updateEmployee = (employeeID, object) =>
  axios.patch(`${ROOTURL}/users/${employeeID}`, object)

export const employeelocations = urlParams =>
  axios.get(
    `${ROOTURL}/users/${
      urlParams.userID
    }/userslocations?_unfold={"location":["name"]}`
  )

export const addEmployeeLocation = object =>
  axios.post(`${ROOTURL}/userslocations`, object)
