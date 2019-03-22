import React from "react";
import Proptypes from "prop-types";
import ElementHeader from "../../molecules/elementHeader"
import { Button } from "antd";
import { Row, Col } from 'antd';


const MasterData = props => {
    return (
        <div id="masterData">
            <div >
                <ElementHeader  title="Create Master Data" />
            </div>
            <div >
                {/* <FileImport/> */}
            </div>
            <div >
                <p style={{marginLeft:"10px"}}>Or Create an Item</p>
                <Button type="primary">Create Item</Button>
            </div>
            <div >
                <Button type="primary">Next</Button>
            </div>
        </div>

        // <Row type="flex" justify="space-between" gutter="16">
        // <Col sp></Col>
        // </Row>

    )
}

export default MasterData