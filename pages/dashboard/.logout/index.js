import React from "react"
import Loading from "../../../src/components/atoms/loading";
import logout from "../../../src/utils/auth/logout";

const Logout = () => {
    // logout()
    {setTimeout(() => {
        logout()
    }   
    , 1000)}
    return (
        
        <Loading/>
    )
}

export default Logout