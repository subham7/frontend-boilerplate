import React from 'react';
import Template from "../../src/components/templates/dashboard";
import {itemData} from './item.data.js';
import {taxesData} from './taxes.data'
class App extends React.Component {
 render() {
    return (
      <div> 
        <Template itemData={itemData} taxesData={taxesData}/>
      </div>
    );
  }
}
export default App;