import React from 'react';
import { Form, asField } from 'informed';
import { Input, Select, Radio, Checkbox } from 'antd';
// import 'antd/dist/antd.css';
const Text_type1 = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <Input
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value);
        console.log(value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});

const Search = Input.Search;
export class Asearch extends React.Component {
  render(){
    return( 
    <div>
        {/* pass on search from props */}
     <Search  placeholder={this.props.placeholder} style={{width:360}} onSearch={value => console.log(value)} enterButton/>
    </div>
      )
    }
 }

//  Not required we gonna use from .... bootstrap
const RG = Radio.Group;
const R = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <Radio
    type="radio"
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value);
        console.log(value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});

//  Not required we gonna use from .... bootstrap
const Check = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  props.field = props.name
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <Checkbox
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value);
        console.log(`checked = ${e.target.checked}`);
        if (onChange) {
          onChange(e);
        } 
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});


const { TextArea } = Input;

const Tarea = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <TextArea
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value);
        console.log(value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});

const O = Select.Option;

const Sel = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <Select
      {...rest}
      ref={forwardedRef}
      onChange={e => {     
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
});

export {Form,Text_type1,Check,Tarea,Sel,O,R,RG};