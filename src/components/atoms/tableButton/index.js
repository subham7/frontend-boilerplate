import React from 'react';
import PropTypes from "prop-types";
import {Button, Modal} from 'antd'; 

const confirm =(e)=> {
    // console.log(e);
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: ()=>console.log('okayyyyy'),
      onCancel: ()=>console.log('cancel')
    });
  }

const ButtonIcon = (props) => {
    return (
        <Button
            type={props.type}
            icon={props.icon}
            shape={props.shape}
            style={props.style}
            size={props.size}
            ghost={props.ghost}
            onClick={confirm}
        />
    )
}

ButtonIcon.defaultProps = {
    type: '',
    shape: "round",
    ghost: false
}

export default ButtonIcon;