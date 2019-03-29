import React from 'react';
import Template from '../../src/components/templates/signup';

class App extends React.Component {

  handleFormData(data){
    console.log(data)
  }
 render() {
    return (
      <div> 
        <Template getFormData={this.handleFormData}/>
      </div>
    );
  }
}
export default App;