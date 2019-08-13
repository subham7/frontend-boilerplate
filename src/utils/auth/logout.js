import Router from 'next/router'
import token from '../token';
import { message } from 'antd';

const logout = () => {
    token.remove()
    message.success("Logged out successfully")
    Router.push('/')
}

export default logout