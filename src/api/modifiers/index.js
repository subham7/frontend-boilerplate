import ROOTURL from "../ROOTURL";
import axios from "axios"

export const modifiers = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/modifiers`)

export const modifieruse = () => axios.get(`${ROOTURL}/modifieruse`);

export const addModifierProduct = (object) => axios.post(`${ROOTURL}/modifieruse`, object);

export const addModifier = (object) => axios.post(`${ROOTURL}/modifiers`, object);

export const deleteModifier = (modifierID) => axios.delete(`${ROOTURL}/modifiers/${modifierID}`)

export const updateModifier = (modifierID, object) => axios.patch(`${ROOTURL}/modifiers/${modifierID}`, object)

export const modifierProduct = (modifierID) => 
    axios.get(`${ROOTURL}/modifieruse?_where=(modifier,eq,${modifierID})&_unfold={"product":["name"]}`)

