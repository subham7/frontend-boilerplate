import React from "react"
import PropTypes from "prop-types"
import { Select } from "antd"

const Option = Select.Option

const Cascader = props => {
  return (
    <div>
      <label>{props.label}</label>
      <Select
        showArrow
        allowClear
        mode={props.mode}
        style={props.style}
        placeholder={props.placeholder}
        optionFilterProp="children"
        onChange={props.handleChange}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        filterOption={props.filterOptions}
        defaultValue={props.defaultValue}
      >
        {props.optionArray ? (
          props.optionArray.map((data, index) => {
            return <Option value={data.value}>{data.name}</Option>
          })
        ) : (
          <Option value="noData" disabled>
            No Data Found
          </Option>
        )}
      </Select>
    </div>
  )
}

Cascader.defaultProps = {
  optionArrray: [],
  placeholder: "Select One",
  style: { width: "100%" },
  mode: "default"
}

export default Cascader
