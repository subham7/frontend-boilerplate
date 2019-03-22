import React from 'react';
import Logo  from '../logoWithMsg';

const ElemHeader = ({ logo, title }) => {
  let ElemHeaderStyle = {
    height: "50px",
    backgroundColor: "#030D34",
    borderRadius: "4px",
    paddingTop:"4px",
    paddingLeft:"30px",
    overflow:"hidden",
    fontSize:"15px"
  }

  if(logo==="enabled") {
    return(
      <div style={ElemHeaderStyle}>
        <div style={{"float":"left"}}>
          <Logo color="#CCCCCC" />
        </div>
        <div style={{"textAlign":"center"}}>
          <h1 style={{"color":"#FFFFFF"}}>{title}</h1>
        </div>
      </div>
    )
  }
  return(
    <div style={ElemHeaderStyle}>
      <div style={{"textAlign":"left", "fontSize":"15px"}}>
        <h1 style={{"color":"#FFFFFF"}}>{title}</h1>
      </div>
    </div>
  )
}
ElemHeader.defaultProps = {
  title:" Test Title"
}

export default ElemHeader;