import React from "react"
import ProductTable from "./../../organisms/productTable"
import Search from "../../molecules/searchBar"
import { DatePicker } from "antd"
import Cascader from "../../molecules/cascader"
import { Row, Col } from "antd"
import moment from 'moment';
import Button from '../../../components/atoms/button'
const { RangePicker } = DatePicker
const dateFormat = "YYYY/MM/DD"

const PaymentReport = props => {
  return (
    <div>
      <Row gutter={16}>
        {props.cascaderData.map((data, index) => (
          <Col span={6}>
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
        <Col span={6}>
          <RangePicker
            style={{ "width": "100%"}}
            // defaultValue={[moment(moment().subtract(1, 'months'), dateFormat), moment(moment(), dateFormat)]}
            format={dateFormat}
            onChange={(range) => props.handleDateChange(range)}
          />
        </Col>
        <Col span={4}>
          <Button style={{ "width": "100%" }} onClick={props.onApply} value="Apply" ></Button>
        </Col>
        <Col span={2}>
          <Button style={{ "width": "100%" }} color='green' onClick={props.onReset} value="Reset" ></Button>
        </Col>
        <Col span={6}>
          <Search
            handleSearch={props.onSearch}
            value="Search product name"
            type="search"
          />
        </Col>
      </Row>
      <br />
      <br />
      <ProductTable
        columns={props.columns}
        data={props.columnData}
        pagination={{ ...props.pagination }}
      />
    </div>
  )
}

export default PaymentReport
