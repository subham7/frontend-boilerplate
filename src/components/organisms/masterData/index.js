import React from "react";
import Proptypes from "prop-types";
import ElementHeader from "../../molecules/elementHeader"
import CreateItem from "../../organisms/forms/createItem"
import Model from "../../molecules/modelButton"
import { Button } from "antd";
import { Row, Col } from 'antd';


const MasterData = props => {
    return (
        <div id="masterData">
            <div >
                <ElementHeader  title="Create Master Data" />
            </div>

            <div style={{marginLeft:"10px"}}>
                <p>Import File</p>
                <div style={{height:"100px", width:"95%", border:"solid"}}>
                    <p>Place holder for drag drop</p>
                    {/* <FileImport/> */}
                </div>
                <div >
                    <p>Or Create an Item</p>
                    <Model form={<CreateItem/>} title="Create Item" buttonValue="Create Item"/>
                </div>
                <div style={{margin:"10px"}}>
                    <p>skip</p>
                    <div style={{position:"absolute", right:"10px", marginTop:"-35px"}}>
                        <Button type="primary">Next</Button>
                    </div>
                    
                </div>
            </div>

        </div>

        // <Row type="flex" justify="space-between" gutter="16">
        // <Col sp></Col>
        // </Row>

    )
}

export default MasterData