import React from "react"
import { Modal, Button } from "antd"
import ButtonOne from "../../atoms/button"
import ElemHeader from "../elementHeader"

class ModalButton extends React.Component {
  state = {
    loading: false,
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleSubmit(data) {
    this.props.onSubmit(data, data => {
      if (data.status) {
        alert(data.message)
        this.setState({ visible: false })
      } else {
        alert(data.message)
      }
    })
  }
  render() {
    const { visible, loading } = this.state
    return (
      <div>
        {this.props.isTableModal ? (
          <Button onClick={this.showModal} icon="form" style={{ "marginRight": "30px" }} shape="circle" type="primary" size="small" ghost />
         ) : (
          <ButtonOne value={this.props.buttonValue} onClick={this.showModal} />
         )}
        {/* <ButtonOne value={this.props.buttonValue} onClick={this.showModal} /> */}
        <Modal
          visible={visible}
          onOk={this.handleOk}
          title={this.props.title}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <this.props.form
              formData={this.props.formData}
              onSubmit={data => this.handleSubmit(data)}
              onCancel={this.handleCancel}
              prefilledValues={this.props.prefilledValues}
            />
          </div>
        </Modal>

        <style jsx>{`
          .ant-modal-header {
            padding: 0 !important;
          }
        `}</style>
      </div>
    )
  }
}
export default ModalButton
