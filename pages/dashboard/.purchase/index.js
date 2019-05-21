import React, { Component } from "react"
import { connect } from "react-redux"

import Purchase from '../../../src/components/organisms/ItemPurchase'
import { stockdiary, products, getLocationByID } from "../../../src/reduxHelper"

import { itemPurchaseData } from './purchase.data'
import uuidv4 from "uuid/v4"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            purchaseItemTableData: [],
            blocations: []
        }
    }

    componentDidMount() {
        let businessID = this.props.business.response.data.businessID
        this.props.getLocationByID(businessID).then(res => {
            this.setState({ blocations: res })
        })
        this.props.getproducts(businessID)
        this.loadPurchaseData()
    }

    render() {
        return (
            <div>
                <Purchase
                    rowSelection={{}}
                    columns={itemPurchaseData.itemPurchaseColumns}
                    columnData={this.state.purchaseItemTableData}
                    cascaderData={itemPurchaseData.cascaderData}
                />
            </div>
        )
    }

    createpurchasecolumns(data) {
        let temp = []
        if (Array.isArray(data)) {
            data.map(item => {
                let object = {}
                object.purchaseItemID = item.id
                object.quantity = item.units
                object.location = this.state.blocations[this.state.blocations.findIndex(id => id.blocationID == item.location)].name
                object.productsData = this.props.products.response.data[this.props.products.response.data.findIndex(id => id.productID == item.product)]
                temp.push(object)
            })
        } else {
            let object = {}
            object.purchaseItemID = item.id
            object.quantity = item.units
            object.location = item.location
            object.productsData = this.props.products.response.data[this.props.products.response.data.findIndex(id => id.productID == item.product)]
            temp.push(object)
        }
        return temp
    }

    loadPurchaseData() {
        this.props.stockdiary()
            .then(data => {
                console.log("gibberish", data)
                this.setState({ purchaseItemTableData: this.createpurchasecolumns(data) })
            })
    }
}

const mapStateToProps = state => {
    return {
        business: state.businesses,
        stockdiary: state.stockdiary,
        products: state.products,
        blocations: state.locations
    }
}

const mapDispatchToProps = dispatch => ({
    getproducts: businessID => dispatch(products.action(businessID)),
    stockdiary: () => dispatch(stockdiary.action()),
    getLocationByID: (businessID) => dispatch(getLocationByID.action(businessID))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)