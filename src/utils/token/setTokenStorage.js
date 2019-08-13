import axios from "axios"
import cookie from 'react-cookies'

const setTokenFromStorage = () => {
  let token;
  if (cookie.load('admin-api-key'))
    token = cookie.load('admin-api-key')
  else
    token = localStorage.getItem("admin-api-key")
    
  axios.defaults.headers.common["x-api-key"] = token
}

export default setTokenFromStorage
