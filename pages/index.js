import React, { Component } from "react"
import { connect } from "react-redux"
import wrapper from "./wrapper"
import { getMyGotoBusiness, getCityByBusinessMyGoto } from "../src/reduxHelper"
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
  }

  loadBusiness = () => {
    this.props.getMyGotoBusiness().then(() => {
      this.setState({
        filterData: this.props.myGotoBusiness.response.data.data
      })
    })
  }

  socialSharing = (bId, type) => {
    console.log(bId)
    const msg =
      "Support your favorite Goto Places. They might need your help. Help them by getting their gift cards as a small gesture."

    switch (type) {
      case "twitter":
        tw({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: msg,
          hashtags: ["mygoto"]
        })
        break

      case "whatsapp":
        whatsapp({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: msg
        })
        break
      case "linkedin":
        linkedin({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: "MyGoto",
          description: msg
        })
      case "facebook":
        fbButton({
          url: `https://mygoto.in/business?bid=${bId}`
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
    this.props.myGotoBusiness.response.data.data.map(item => {
      if (item.city === city) data.push(item)
    })
    this.setState({ filterData: data })
  }

  render() {
    if (
      this.props.myGotoBusiness.isLoaded &&
      this.props.cityByBusinessMyGoto.isLoaded
    )
      return (
        <div>
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
            <MyGotoCard
              data={this.state.filterData}
              socialSharing={this.socialSharing}
            />
            <MyGotoInfoCard />
            <MyGotoFaq />
          </CsrTemplate>
        </div>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  myGotoBusiness: state.getMyGotoBusiness,
  cityByBusinessMyGoto: state.getCityByBusinessMyGoto
})

const mapDispatchToProps = dispatch => ({
  getMyGotoBusiness: () => dispatch(getMyGotoBusiness.action()),
  getCityByBusinessMyGoto: () => dispatch(getCityByBusinessMyGoto.action())
})

export default wrapper(connect(mapStateToProps, mapDispatchToProps)(App))
