import React from "react"
import { Form, asField, Select, Option } from "informed"
import { Input, Radio, Checkbox } from "antd"
// import 'antd/dist/antd.css';

const selectStyle = {
  backgroundColor: "#fff",
  border: "1px solid #d9d9d9",
  height: "32px",
  borderRadius: "4px"
}

const Text_type1 = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props
  return (
    <Input
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value)
        console.log(value)
        if (onChange) {
          onChange(e)
        }
      }}
      onBlur={e => {
        setTouched()
        if (onBlur) {
          onBlur(e)
        }
      }}
    />
  )
})

const Search = Input.Search
export class Asearch extends React.Component {
  render() {
    return (
      <div>
        {/* pass on search from props */}
        <Search
          placeholder={this.props.placeholder}
          style={{ width: 360 }}
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    )
  }
}

//  Not required we gonna use from .... bootstrap
const RG = Radio.Group
const R = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props
  return (
    <Radio
      type="radio"
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value)
        console.log(value)
        if (onChange) {
          onChange(e)
        }
      }}
      onBlur={e => {
        setTouched()
        if (onBlur) {
          onBlur(e)
        }
      }}
    />
  )
})

//  Not required we gonna use from .... bootstrap
const Check = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  props.field = props.name
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props
  return (
    <Checkbox
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value)
        console.log(`checked = ${e.target.checked}`)
        if (onChange) {
          onChange(e)
        }
      }}
      onBlur={e => {
        setTouched()
        if (onBlur) {
          onBlur(e)
        }
      }}
    />
  )
})

const { TextArea } = Input

const Tarea = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props
  return (
    <TextArea
      {...rest}
      ref={forwardedRef}
      onChange={e => {
        setValue(e.target.value)
        console.log(value)
        if (onChange) {
          onChange(e)
        }
      }}
      onBlur={e => {
        setTouched()
        if (onBlur) {
          onBlur(e)
        }
      }}
    />
  )
})

const O = Select.Option

const Sel = props => {
  let style = { ...props.style, ...selectStyle }
  return (
    <Select field={props.field} style={style}>
      {props.option.map((data, index) => (
        <Option key={index} value={data.value}>
          {data.name}
        </Option>
      ))}
    </Select>
  )
}

export { Form, Text_type1, Check, O, Tarea, Sel, R, RG }
