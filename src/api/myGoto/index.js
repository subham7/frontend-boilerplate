import axios from "axios"
const ROOTURL = "https://mygoto.in/api"

export const getMyGotoBusiness = () => axios.get(`${ROOTURL}/business`)

export const getMyGotoBusinessById = bId =>
  axios.get(`${ROOTURL}/business/${bId}`)

export const createMyGotoBusiness = data =>
  axios.post(`${ROOTURL}/business/create`, data)

export const createPaymentMyGoto = data =>
  axios.post(`${ROOTURL}/payments/create`, data)

export const cityMyGoto = state =>
  axios.get(`https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${state}`)

export const getCityByBusinessMyGoto = () =>
  axios.get(`${ROOTURL}/business/cities`)
