import React from 'react';
import { Modal, Button } from 'antd';
import ButtonOne from '../../atoms/button';
import ElemHeader from '../elementHeader';

class ModalButton extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
 
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <ButtonOne value={this.props.buttonValue} onClick={this.showModal} />
        <Modal
          visible={visible}
          onOk={this.handleOk}
          title={this.props.title}
          onCancel={this.handleCancel}
          footer={[
            <ButtonOne value="Return" onClick={this.handleCancel} />,
            <ButtonOne value="Submit" loading={loading} onClick={this.handleOk} />
          ]}
        >
        
        <div style={{"marginTop":"10px", "marginBottom":"10px"}}>
          {this.props.form}
        </div>
        </Modal>
        
            <style jsx>{`
            .ant-modal-header{
                padding:0 !important;
            }
            `}</style>
        
        
        
      </div>
    );
  }
}
export default ModalButton;
