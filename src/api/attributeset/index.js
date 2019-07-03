import ROOTURL from "../ROOTURL";
import axios from "axios"

export const attributesets = (businessID) => axios.get(`${ROOTURL}/attributesets`)

export const addAttributeSet= (object) => axios.post(`${ROOTURL}/attributesets`, object)

export const deleteAttributeSet= (attributesetsID) => axios.delete(`${ROOTURL}/attributesets/${attributesetsID}`)

export const updateAttributeSet= (attributesetsID, object) => axios.patch(`${ROOTURL}/attributesets/${attributesetsID}`, object)

export const assignAttribute= (object) => axios.post(`${ROOTURL}/attributeuse`, object)

export const assignedAttribute = (modifierID) => 
    axios.get(`${ROOTURL}/attributeuse?_where=(attributeset,eq,${modifierID})&_unfold={"attribute":["name"]}`)
