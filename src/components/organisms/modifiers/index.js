import React from 'react';
import SearchBar from '../../molecules/searchBar';
import Cascader from '../../molecules/cascader';
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button';
import Model from "../../molecules/modelButton"
import createModifier from "../../organisms/forms/createModifier"
import { Row,Col } from 'antd';
//Code
let ModifierTemplate = (props) => {
  return(
    <div style={{"overflow":"hidden"}}>
      <Row >
        <Col span={3}>
          <Cascader optionArray={props.cascaderData.optionArray} placeholder={props.cascaderData.placeholder} />
        </Col>
        <Col span={6}>
          <SearchBar handleSearch={props.onSearch} value="Search" />
        </Col>
        <Col span={3} push={9}>
          <ButtonOne value="Create Modifier Set"/>
        </Col>
      </Row>
      <br />
      <ProductTable columns={props.columns} data={props.columnData} pagination={{...props.pagination}} />
      <Row>
        <Col span={6} push={19}>
          <Model
            form={createModifier}
            title="Create Modifier"
            buttonValue="Create"
            onSubmit={props.onCreate}
            handleSubmitOk={props.handleSubmitOk}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ModifierTemplate;