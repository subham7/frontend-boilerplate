import axios from "axios"
import ROOTURL from "./../ROOTURL"

// export const getPermissions = uid =>
//   axios.get(
//     `${ROOTURL}/nroleuserslocations?_where=(user,eq,0b6e1ac7-f8a9-4149-a302-ed3a0e901618)&_unfold={"role":["name"]}`
//   )

export const businessRoles = () => axios.get(`${ROOTURL}/nbroles`)

export const appRoles = () => axios.get(`${ROOTURL}/nroles`)

// Fetch permission for business (dashboard)
export const businessPermissions = userId =>
  axios.get(
    `${ROOTURL}/businesspermission?_where=(user,eq,${userId})&_unfold={"brole":["name"]}`
  )

// Fetch permissions for app
export const getPermissions = userID =>
  axios.get(
    `${ROOTURL}/nroleuserslocations?_where=(user,eq,${userID})&_unfold={"role":["name"]}`
  )

// Update app permissions
export const updatePermission = (data, roleId, userId, locationId) =>
  axios.patch(
    `${ROOTURL}/nroleuserslocations/${roleId}___${userId}___${locationId}`,
    data
  )

export const getLocationByBid = businessID =>
  axios.get(
    `${ROOTURL}/businesses/${businessID}/blocations?_fields=blocationID,name`
  )

export const getEmployeeByLid = locationID =>
  axios.get(
    `${ROOTURL}/userslocations?_where=(location,eq,${locationID})&_unfold={"user":["firstName","LastName"]}`
  )

export const getEmployeeByBusinessId = businessId =>
  axios.get(
    `${ROOTURL}/businesses/${businessId}/users?_fields=userID,userName,firstName,LastName`
  )

export const updateWebPermission = (data, broleId, userId, businessId) =>
  axios.patch(
    `${ROOTURL}/businesspermission/${broleId}___${userId}___${businessId}`,
    data
  )
