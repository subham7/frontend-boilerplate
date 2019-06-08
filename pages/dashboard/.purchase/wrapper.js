import React, { Component } from "react"
import { connect } from "react-redux"
import { products, getLocationByID } from "../../../src/reduxHelper"

export default function init(WrappedComponent) {
    class App extends Component {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            let businessID = this.props.businesses.response.data.businessID
            if(!this.props.products.response){
                this.props.getProducts(businessID).then(res => {
                    // console.log("productsss", res)
                })
            }

            if(!this.props.getLocationByID.response){
                this.props.getLocationByID(businessID).then(res => {
                    // console.log("locationss", res)
                })
            }
        }

        render() {
            if (this.props.products.isLoaded && this.props.products.isLoaded)
                return <WrappedComponent {...this.props} />
            else return <h1>Loading... </h1>
        }
    }

    const mapStateToProps = state => ({
        businesses: state.businesses,
        blocations: state.getLocationByID,
        products: state.products
    })

    const mapDispatchToProps = dispatch => ({
        getLocationByID: businessID => dispatch(getLocationByID.action(businessID)),
        getProducts: businessID => dispatch(products.action(businessID)),
    })

    return connect(mapStateToProps, mapDispatchToProps)(App)
}