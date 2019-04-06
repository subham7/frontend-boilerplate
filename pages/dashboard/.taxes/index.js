import React from 'react';
import { connect } from 'react-redux'

import Taxes from "./.taxes"

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import uuidv4 from "uuid/v4"

class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

      callback(key) {
        // console.log(key);
       }
    render() {
        return (
              <div>
                <Tabs defaultActiveKey={"1"} onChange={this.callback}>
                  <TabPane tab="Tax Categories" key="1"><h1>Nothing here</h1></TabPane>
                  <TabPane tab="Taxes" key="2"><Taxes /></TabPane>
                </Tabs>
              </div>
          );
  }

  
}


const mapStateToProps = state => ({

  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
 
  })
  export default connect(mapStateToProps,mapDispatchToProps)(App);