import axios from "axios"
import ROOTURL from "./../ROOTURL"

// export const getPermissions = uid =>
//   axios.get(
//     `${ROOTURL}/nroleuserslocations?_where=(user,eq,0b6e1ac7-f8a9-4149-a302-ed3a0e901618)&_unfold={"role":["name"]}`
//   )

export const getPermissions = userID =>
  axios.get(
    `${ROOTURL}/nroleuserslocations?_where=(user,eq,${userID})&_unfold={"role":["name"]}`
  )

export const updatePermission = data =>
  axios.put(`${ROOTURL}/nroleuserslocations`, data)

export const getLocationByBid = businessID =>
  axios.get(
    `${ROOTURL}/businesses/${businessID}/blocations?_fields=blocationID,name`
  )

export const getEmployeeByLid = locationID =>
  axios.get(
    `${ROOTURL}/userslocations?_where=(location,eq,${locationID})&_unfold={"user":["firstName","LastName"]}`
  )
