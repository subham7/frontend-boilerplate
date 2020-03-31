import React, { Component } from 'react'
import { Switch, message } from 'antd'

const onChangeSwitch = (checked => {
    console.log(`switch to ${checked}`, "onclick")

})

class Switch1 extends Component {

    handleSwitchChange(checked) {
        this.props.onChange(checked, data => {
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
        return (
            <Switch defaultChecked={this.props.defaultChecked} onChange={(checked) => this.handleSwitchChange(checked)} />
        )
    }
}

export default Switch1;