import React from "react"
import ButtonOne from "../../atoms/button"
import Cascader from "../../molecules/cascader"
import Search from "../../molecules/searchBar"
import { Row, Col } from "antd"

const CascaderAndSearch = props => {
  return (
    <Row gutter="8">
      {props.dataArray.map((data, index) => (
        <Col span={4}>
          <Cascader
            mode={data.mode}
            placeholder={data.placeholder}
            handleChange={value => data.onChange(value)}
            onFocus={data.onFocus}
            onBlur={data.onBlur}
            optionArray={data.optionArray}
            style={data.style}
          />
        </Col>
      ))}
      <Col span={3} key={6}>
        <ButtonOne value="Apply" onClick={props.applyFilter} color="#2699FB" />
      </Col>
      <Col span={5}>
        <Search
          handleSearch={props.onSearch}
          value={props.placeholder}
          type="search"
        />
      </Col>
      <Col span={3} key={7}>
        <ButtonOne value={props.buttonValue} color="#2699FB" />
      </Col>
    </Row>
  )
}

export default CascaderAndSearch
