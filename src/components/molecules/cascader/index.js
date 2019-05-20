import React from 'react';
import PropTypes from "prop-types";
import {Select} from 'antd';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
  // console.log(Option)
}

function filterOptions(input, option) {
  console.log("input", input,"option", option)
  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const Cascader = (props) => {
    // console.log(props)
    return(
        <Select
            showArrow allowClear
            style={props.style}
            placeholder={props.placeholder}
            optionFilterProp="children"
            onChange={props.handleChange}
            onFocus={props.handleFocus}
            onBlur={props.handleBlur}
            filterOption={props.filterOptions}
        >
        {props.optionArray ? (
            props.optionArray.map((data, index) => {
                return <Option value={data}>{data}</Option>
            })
        ) : (
            <Option value='noData' disabled>No Data Found</Option>
        )}


        </Select>
    )
}

Cascader.defaultProps = {
    optionArrray: [],
    placeholder: 'Select One',
    style: { width:"100%"}
}

export default Cascader;