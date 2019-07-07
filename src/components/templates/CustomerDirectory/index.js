import React from "react"
import PropTypes from "prop-types"
import ContactDetails from "../../organisms/ContactDetails"
import ContactList from "../../molecules/conatactList"
import Cascader from "../../molecules/cascader"
import ButtonOne from "../../atoms/button"
import SearchBar from "../../molecules/searchBar"
import { Row, Col } from "antd"

const CustomerDirectory = props => {
  return (
    <Row gutter={8}>
      <Col span={8}>
        <ContactList
          onClick={props.onClick}
          heading="CONTACT LIST"
          data={props.listData}
          customerId="xx12xx"
        />
      </Col>
      <Col span={16}>
        <Row gutter={4}>
          <Col span={8}>
            <SearchBar handleSearch={props.onSearch} value="Search Name" />
          </Col>
          <Col span={4}>
            <Cascader optionArray={props.filterArry} placeholder="Filter" />
          </Col>
          <Col span={6}>
            <ButtonOne value="Import/Export" width="100%" />
          </Col>
          <Col span={6}>
            <ButtonOne value="Create" width="100%" />
          </Col>
        </Row>
        <br />
        {Object.keys(props.customerData).length !== 0 ? (
          <ContactDetails
            customerData={props.customerData}
            handleModalClick={props.handleModalClick}
            actionData={props.actionData}
            date={props.date}
            receiptCardData={props.receiptCardData}
            receiptDetails={props.receiptDetails}
          />
        ) : (
            <div />
          )}
      </Col>
    </Row>
  )
}

export default CustomerDirectory
