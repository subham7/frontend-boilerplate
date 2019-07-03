import axios from "axios"

const setToken = token => {
  localStorage.setItem("admin-api-key", token)
  axios.defaults.headers.common["x-api-key"] = token
}

export default setToken
