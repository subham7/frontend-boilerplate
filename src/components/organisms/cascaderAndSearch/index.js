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
            placeholder={data.placeholder}
            onChange={data.onChange}
            onFocus={data.onFocus}
            onBlur={data.onBlur}
            optionArray={data.optionArray}
            style={data.style}
          />
        </Col>
      ))}
      <Col span={5}>
        <Search
          handleSearch={props.onSearch}
          value={props.placeholder}
          type="search"
        />
      </Col>
      <Col span={3} key={6}>
        <ButtonOne value={props.buttonValue} color="#2699FB" />
      </Col>
    </Row>
  )
}

export default CascaderAndSearch
