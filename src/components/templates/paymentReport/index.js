import React from "react"
import PaymentReportTable from "./../../organisms/paymentReportTable"
import CascaderAndSearch from "./../../organisms/cascaderAndSearch"
import { DatePicker } from "antd"
import Cascader from "../../molecules/cascader"
import { Row, Col } from "antd"
import moment from 'moment';
import Button from '../../../components/atoms/button'
const { RangePicker } = DatePicker
const dateFormat = "YYYY/MM/DD"

const PaymentReport = props => {
  console.log(props.cascaderData,"casco")
  return (
    <div>
      {/* <CascaderAndSearch
        dataArray={props.cascaderData}
        buttonValue="Quick Upload"
        onSearch={props.onSearch}
        placeholder="Search Name"
        applyFilter={props.applyFilter}
      />
      <br />
      <RangePicker format={dateFormat} onChange={props.handleDateChange} /> */}
      <Row gutter={16}>
          <Col span={8}>
            <Cascader
              placeholder={props.placeholder}
              optionArray={props.cascaderData}
              mode= "multiple"
              handleChange={props.handeLocationChange}
            // defaultValue={intialValue}
            />
          </Col>
          <Col span={8}>
            <RangePicker
              style={{ "width": "100%" }}
              defaultValue={[moment(moment().subtract(1, 'months'), dateFormat), moment(moment(), dateFormat)]}
              format={dateFormat}
              onChange={(range) => props.handleDateChange(range)}
            />
          </Col>
          <Col span={4}>
            <Button style={{ "width": "100%" }} onClick={props.applyFilter} value="Apply" ></Button>
          </Col>
      </Row>
      <br />
      <br />
      <PaymentReportTable
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={{ ...props.pagination }}
      />
      <br/>
      <br/>
      <br/>
      <PaymentReportTable
        columns={props.columns2}
        dataSource={props.dataSource2}
        pagination={{ ...props.pagination }}
      />
    </div>
  )
}

export default PaymentReport
