import React from "react"
import { Modal, Button, message } from "antd"
import ButtonOne from "../../atoms/button"
import ElemHeader from "../elementHeader"

class ModalButton extends React.Component {
  state = {
    loading: false,
    visible: false,
    normalVisible: false
  }

  showModal = option => {
    switch (option) {
      case "visible":
        this.setState({
          visible: true
        })
        break
      case "normalVisible":
        this.setState({
          normalVisible: true
        })
        break
      default:
        break
    }
  }

  handleCancel = option => {
    switch (option) {
      case "visible":
        this.setState({
          visible: false
        })
        break
      case "normalVisible":
        this.setState({
          normalVisible: false
        })
        break
      default:
        break
    }
  }

  handleSubmit(data) {
    this.props.onSubmit(data, data => {
      if (data.status) {
        // alert(data.message)
        message.success(data.message)
        this.setState({ visible: false })
      } else {
        message.error(data.message)
        // alert(data.message)
      }
    })
  }
  render() {
    const { visible, normalVisible, loading } = this.state
    return (
      <div>
        {this.props.isTableModal ? (
          <Button
            onClick={_ => this.showModal("visible")}
            icon="form"
            style={{ marginRight: "30px" }}
            shape="circle"
            type="primary"
            size="small"
            ghost
          />
        ) : this.props.normal ? (
          <ButtonOne
            value={this.props.buttonValue}
            onClick={_ => this.showModal("normalVisible")}
          />
        ) : (
          <ButtonOne
            value={this.props.buttonValue}
            onClick={_ => this.showModal("visible")}
          />
        )}
        {/* <ButtonOne value={this.props.buttonValue} onClick={this.showModal} /> */}
        <Modal
          visible={visible}
          onOk={this.handleOk}
          title={this.props.title}
          onCancel={_ => this.handleCancel("visible")}
          footer={null}
          style={this.props.style}
          width={this.props.width}
        >
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <this.props.form
              formData={this.props.formData}
              onSubmit={data => this.handleSubmit(data)}
              onCancel={_ => this.handleCancel("visible")}
              prefilledValues={this.props.prefilledValues}
              utilFunc={this.props.utilFunc}
            />
          </div>
        </Modal>

        <Modal
          visible={normalVisible}
          onOk={this.handleOk}
          title={this.props.title}
          onCancel={_ => this.handleCancel("normalVisible")}
          footer={null}
          style={this.props.style}
          width={this.props.width}
        >
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {this.props.content}
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
