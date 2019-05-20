import React, { Component } from "react"
import { connect } from "react-redux"

import { getProductById, modifieruse, getBusinessById } from "../../../src/reduxHelper"
import Modifiers from '../../../src/components/organisms/modifiers'

import { itemData } from './modifier.data'
import uuidv4 from "uuid/v4"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modifierItemData: []
        }
    }

    componentDidMount() {
        console.log("ho gya  load", this.props.business.response.data.businessID)
        this.loadModifierData()
    }

    render() {
        console.log("in render state", this.state)
        return (
            <div>
                <Modifiers
                    cascaderData={itemData.cascaderData}
                    columns={itemData.productColumns}
                    columnData={this.state.modifierItemData}
                />
            </div>
        )
    }

    _createModifierColumns(data, businessData) {
        let temp = []
        console.log(Array.isArray(data), JSON.stringify(data))
        if (Array.isArray(data)) {
            data.map(item => {
                let object = {}
                object.name = item.name
                object.options = "not mapped"
                object.location = businessData.city
                temp.push(object)
            })
        } else {
            let object = {}
            object.name = data.name
            object.options = "not mapped"
            object.location = businessData.city
            temp.push(object)
        }
        return temp
    }

    loadModifierData() {
        let businessData = this.props.business.response.data
        this.props.getModifieruse()
            .then(modifiers => {
                // let array = []
                // var abc = modifiers.map(item => {
                //     this.props.getProductById(item.product).then(res => {
                //         array.push(res)
                //     })
                // })
                // Promise.all(abc).then((results) => {
                //     console.log("jjjjjjjj", this._createModifierColumns(array, businessData))
                //     this.setState({ modifierItemData: this._createproductsColumns(array) })
                //     console.log("finalllll state", this.state.modifierItemData)
                // })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const mapStateToProps = state => ({
    business: state.businesses,
    // products: state.products,
    modifieruse: state.modifieruse
})

const mapDispatchToProps = dispatch => ({
    getModifieruse: () => dispatch(modifieruse.action()),
    getProductById: productID => dispatch(getProductById.action(productID)),
    getBusinessById: businessID => dispatch(getBusinessById.action(businessID))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)