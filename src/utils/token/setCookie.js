import axios from "axios"
import cookie from 'react-cookies'

const setTokenCookie = token => {
    let expiryHours = 12
    // const expires = new Date()
    // expires.setTime(expires.getTime() + (expiryHours * 60 * 60 * 1000))
    cookie.save("admin-api-key", token )
    axios.defaults.headers.common["x-api-key"] = token
}

export default setTokenCookie
