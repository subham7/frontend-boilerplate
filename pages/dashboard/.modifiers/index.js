import React, {Component} from "react"
import { connect } from "react-redux"

import { getProducts, modifieruse  } from "../../../src/reduxHelper"
import Modifiers from '../../../src/components/organisms/modifiers'

import {itemData} from './modifier.data'
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
        return(
            <div>
                <Modifiers
                  cascaderData={itemData.cascaderData}
                  columns={itemData.productColumns}
                  columnData={itemData.productColumnData}
                />
            </div>
        )
    }

    loadModifierData() {
        let businessID = this.props.business.response.data.businessID
        this.props.getModifieruse()
        .then(modifiers => {
            modifiers.map(item => {
                this.props.getProducts(businessID).then(rs => {
                    console.log("qqqqqqqqqqq", res)
                })
            })
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
    getproducts: businessID => dispatch(products.action(businessID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)