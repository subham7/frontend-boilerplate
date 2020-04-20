import cookie from 'react-cookies'

const getToken = () => {
  if(cookie.load('admin-api-key'))
    return cookie.load('admin-api-key')
  else
    return localStorage.getItem("admin-api-key")
}

export default getToken
