import axios from "axios"

const setTokenFromStorage = () => {
  let token = localStorage.getItem("admin-api-key")
  axios.defaults.headers.common["x-api-key"] = token
}

export default setTokenFromStorage
