import React from 'react';
import { Button } from 'antd';

const ButtonOne = ({ color, value, onClick, loading}) => {
  
  let ButtonStyle = {
    backgroundColor: color,
    borderWidth: '0px',
    padding: "0.2em 3.3em",
    borderRadius: "4px"
  }
  if (loading) {
    return(
      <Button
        type="primary"
        style={ButtonStyle}
        onClick={onClick}
        loading={loading}>

      {value}
      </Button>
    )
  }
  return(
    <Button
      type="primary"
      style={ButtonStyle}
      onClick={onClick}>
    {value}
    </Button>
  )
}
ButtonOne.defaultProps = {
  color: "#030D34",
  value: "Click Me",
}

export default ButtonOne;
