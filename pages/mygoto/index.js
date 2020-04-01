import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getMyGotoBusiness,
  getCityByBusinessMyGoto,
  cityMyGoto
} from "../src/reduxHelper"
import { tw, whatsapp, linkedin, fbButton } from "vanilla-sharing"
import CsrTemplate from "../src/components/templates/csrTemplate"
import MyGotoCard from "../src/components/organisms/myGotoCard"
import MyGotoInfoCard from "../src/components/organisms/myGotoInfoCard"
import MyGotoFaq from "../src/components/organisms/myGotoFaq"
import Loader from "../src/components/atoms/loading"
import { Row, Col, Card, Button } from "antd"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { filterData: [] }
  }

  componentDidMount() {
    this.loadBusiness()
    this.props.getCityByBusinessMyGoto()
    this.props.cityMyGoto()
  }

  loadBusiness = () => {
    this.props.getMyGotoBusiness().then(() => {
      this.setState({
        filterData: this.props.myGotoBusiness.response.data.data
      })
    })
  }

  socialSharing = (bId, type) => {
    const msg =
      "Support your favorite Goto Places. They might need your help. Help them by getting their gift cards as a small gesture."

    switch (type) {
      case "twitter":
        tw({
          url: `http://mygoto.in/${bId}`,
          title: msg,
          hashtags: ["mygoto"]
        })
        break

      case "whatsapp":
        whatsapp({
          url: `http://mygoto.in/${bId}`,
          title: msg
        })
        break
      case "linkedin":
        linkedin({
          url: `http://mygoto.in/${bId}`,
          title: "MyGoto",
          description: msg
        })
      case "facebook":
        fbButton({
          url: `http://mygoto.in/${bId}`
        })
    }
  }

  handleSearch = value => {
    const filteredEvents = this.props.myGotoBusiness.response.data.data.filter(
      data => {
        var pattern = new RegExp(value, "i")
        return data.name.match(pattern)
      }
    )
    this.setState({ filterData: filteredEvents })
  }

  handleFilter = city => {
    let data = []
    this.state.filterData.map(item => {
      if (item.city === city) data.push(item)
    })
    this.setState({ filterData: data })
  }

  render() {
    if (
      this.props.myGotoBusiness.isLoaded &&
      this.props.cityByBusinessMyGoto.isLoaded &&
      this.props.cityMyGotoData.isLoaded
    )
      return (
        <CsrTemplate
          diplaySearch={true}
          background="#1e4ed6"
          displayFilter={true}
          cityFilter={this.props.cityByBusinessMyGoto.response.data.data}
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          reset={this.loadBusiness}
          reloadBusiness={this.loadBusiness}
        >
          {this.state.filterData.length != 0 ? (
            <Row>
              {this.state.filterData.map(item => (
                <Col xl={6} sm={12}>
                  <div style={{ padding: "10px" }}>
                    <MyGotoCard
                      bId={item.pk_business_id}
                      title={item.name}
                      city={item.city}
                      image={item.image}
                      socialSharing={this.socialSharing}
                    />
                  </div>
                </Col>
              ))}
              <br />
            </Row>
          ) : null}
          <MyGotoInfoCard />
          <MyGotoFaq />
        </CsrTemplate>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  myGotoBusiness: state.getMyGotoBusiness,
  cityByBusinessMyGoto: state.getCityByBusinessMyGoto,
  cityMyGotoData: state.cityMyGoto
})

const mapDispatchToProps = dispatch => ({
  getMyGotoBusiness: () => dispatch(getMyGotoBusiness.action()),
  getCityByBusinessMyGoto: () => dispatch(getCityByBusinessMyGoto.action()),
  cityMyGoto: () => dispatch(cityMyGoto.action())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
