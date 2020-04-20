import axios from "axios"
import cookie from 'react-cookies'

const removeToken = () => {
  localStorage.removeItem("admin-api-key")
  cookie.remove("admin-api-key")
  delete axios.defaults.headers.common["x-api-key"]
}

export default removeToken
