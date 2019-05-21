import React, { Component } from "react"
import { connect } from "react-redux"

import { getProductById, modifieruse, getBusinessById } from "../../../src/reduxHelper"
import Modifiers from '../../../src/components/organisms/modifiers'

import { itemData } from './modifier.data'
import uuidv4 from "uuid/v4"
import axios from 'axios';

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
               axios.all(modifiers.map((item) => {
                   return this.props.getProductById(item.product)
                   .then((res) => {
                    //    console.log(res);
                       return res;
                   })
               }))
               .then((lista) => {
                //    console.log("listaaaa", JSON.stringify(lista))
                   this.setState({ modifierItemData: this._createModifierColumns(lista, businessData) })
                    // console.log("finalll", this.state)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const mapStateToProps = state => ({
    business: state.businesses,
    modifieruse: state.modifieruse
})

const mapDispatchToProps = dispatch => ({
    getModifieruse: () => dispatch(modifieruse.action()),
    getProductById: productID => dispatch(getProductById.action(productID)),
    getBusinessById: businessID => dispatch(getBusinessById.action(businessID))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)