import React from 'react';
import SearchBar from '../../molecules/searchBar';
import Cascader from '../../molecules/cascader';
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button';
import { Row,Col } from 'antd';
//Code
let ModifierTemplate = (props) => {
  return(
    <div style={{"overflow":"hidden"}}>
      <Row >
        <Col span={3}>
          <Cascader optionArray={props.cascaderData[0].optionArray} />
        </Col>
        <Col span={6}>
          <SearchBar />
        </Col>
        <Col span={3} push={9}>
          <ButtonOne value="Create Modifier Set"/>
        </Col>
      </Row>
      <br />
      <ProductTable columns={props.columns} data={props.columnData} />
      <Row>
        <Col span={6} push={19}>
          <ButtonOne value="Create"/>
        </Col>
      </Row>
    </div>
  )
}
export default ModifierTemplate;