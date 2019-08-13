import React from "react"
import PropTypes from "prop-types"
import reduxFormField from "./../../../utils/reduxFormField"

import { Input, DatePicker } from "antd"
const { TextArea } = Input

const inputStyle = {
  // borderTop: "none",
  // borderLeft: "none",
  // borderRight: "none",
  // borderBottom: "1px solid #757575",
  // borderRadius: "0",
  width: "100%"
}

const dateStyle = {
  width: "100%"
}

const Input1 = props => {
  const { name, type, label, value, onChange } = props

  switch (type) {
    case "multiline":
      return (
        <div style={{ marginBottom: "25px" }}>
          <p className="label">{label}</p>
          <TextArea
            autosize={{ minRows: 4, maxRows: 7 }}
            name={name}
            value={value}
            onChange={onChange}
            style={inputStyle}
          />
        </div>
      )
    case "date":
      return (
        <div style={{ marginBottom: "25px" }}>
          <p className="label">{label}</p>
          <DatePicker
            name={name}
            type={type}
            defaultValue={value}
            onChange={onChange}
            style={dateStyle}
            placeholder=""
            format="DD/MM/YYYY"
          />
        </div>
      )
    default:
      return (
        <div style={{ marginBottom: "25px" }}>
          <p className="label">{label}</p>
          <Input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            style={inputStyle}
          />
        </div>
      )
  }
}

Input1.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}

Input1.defaultProps = {
  type: "text",
  margin: "normal"
}

export default reduxFormField(Input1)
