import React from 'react';
import PropTypes from "prop-types";
import {Button, Modal} from 'antd'; 

// const confirm =(e)=> {
//     console.log(e.values);
//     Modal.confirm({
//       title: 'Confirm',
//       content: 'Bla bla ...',
//       okText: 'OK',
//       cancelText: 'Cancel',
//       onOk: ()=>{
//         console.log('okayyyyy')
//         // console.log(e)
//       },
//       onCancel: ()=>console.log('cancel')
//     });
//   }

const ButtonIcon = (props) => {
    const confirm =(e)=> {
        Modal.confirm({
          title: props.modalTitle,
        //   content: 'Bla bla ...',
          okText: 'OK',
          cancelText: 'Cancel',
          onOk: ()=>props.onSubmit(),
          onCancel: ()=>console.log('cancel')
        });
      }

    return (
        <Button
            type={props.type}
            icon={props.icon}
            shape={props.shape}
            style={props.style}
            size={props.size}
            ghost={props.ghost}
            onClick={confirm}>
        {props.value}
        </Button>
    )
}

ButtonIcon.defaultProps = {
    type: '',
    shape: "round",
    ghost: false
}

export default ButtonIcon;