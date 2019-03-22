import React from 'react';

export let Logo = ({ color , message }) => {
  let LogoStyle = {
    textAlign: "center",
    color: color,
    lineHeight: "17px"
  }
  if(!message){
    return(
      <div style={{"padding":"0"}}>
        <h1 style={{"color": color , margin:0}}><b>S K I P</b></h1>
      </div>
    )
  }
  return(
    <fragment style={LogoStyle}>
      <h1 style={{marginTop:0}}><b>S K I P</b></h1>
      <p style={{"color":"#4D4F5C"}}>{message}</p>
    </fragment>
  )
}
Logo.defaultProps = {
  color: "#43425D"
}

export default Logo