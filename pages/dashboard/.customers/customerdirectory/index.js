import React, { Component } from "react"
import { connect } from "react-redux"
import CustomerDirectory from '../../../../src/components/templates/CustomerDirectory'
import { receiptCardData, listData, customerData } from './customerDirectory.data'

import { allUsers } from "../../../../src/reduxHelper"
import ROOTURL from '../../../../src/api/ROOTURL'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerDetails: {}
        }
    }

    componentDidMount() {
        this.props.getUsers()
    }

    handleClick = (userID) => {
        console.log(userID)
        axios.get(`${ROOTURL}/users?_where=(userID,eq,${userID})`).then(res => {
            this.setState({customerDetails: res.data})
        })
        
    }

    render() {
        if (this.props.allUsers.response)
            return (
                <CustomerDirectory
                    listData={this.props.allUsers.response.data}
                    customerData={this.state.customerDetails}
                    actionData={['abcd', 'efgh']}
                    date='Today 12-12-2019'
                    receiptCardData={receiptCardData}
                    onClick={this.handleClick}
                />
            )
        else return <h1>Loading...</h1>
    }
}

const mapStateToProps = state => ({
    allUsers: state.allUsers
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(allUsers.action()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)