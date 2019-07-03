import axios from "axios"

const removeToken = () => {
  localStorage.removeItem("admin-api-key")
  delete axios.defaults.headers.common["x-api-key"]
}

export default removeToken
