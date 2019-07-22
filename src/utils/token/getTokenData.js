import getToken from "./getToken"
var jwtDecode = require('jwt-decode');


const getTokenData = () => {
    let token= getToken()
    // console.log("token", token)
    return jwtDecode(token);
}
export default getTokenData

