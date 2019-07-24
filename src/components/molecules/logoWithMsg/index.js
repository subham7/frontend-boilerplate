import React from 'react';

export let Logo = ({ color , message }) => {
  let LogoStyle = {
    textAlign: "center",
    color: color,
    lineHeight: "17px"
  }
  let imageStyle = {
    width: "100%"
  }
  if(!message){
    return(
      // <div style={{"padding":"0"}}>
        <img 
          src="/static/images/icons/LogoMainWhite.png" 
          style={imageStyle}
        />
      // </div>
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