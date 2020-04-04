import React, { Component } from "react"
import Media from "react-media"
import { Affix, Button, Input, Select } from "antd"
const { Search } = Input
import ModelButton from "./../../molecules/modelButton"
import MyGotoBanner from "./../../organisms/myGotoBanner"
import HomeBanner from "./../../organisms/homeBanner"
import styles from "./styles"

const { Option } = Select

class CsrTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: "" //For now its empty or you can give it a default class.
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.getWindowHeight)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.getWindowHeight)
  }

  //then create the method
  getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const shrinkOn = 80

    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    if (distanceY > shrinkOn) {
      this.setState({
        class: "shadow"
      })
    } else {
      this.setState({
        class: ""
      })
    }
  }

  render() {
    const style = {
      logoContainer: {
        float: "left"
      },
      logo: {
        height: "35px",
        width: "auto"
      },
      btnContainer: {
        float: "right",
        display: "flex"
      },
      faqLink: {
        paddingTop: "5px",
        paddingRight: "10px"
      },
      header: {
        padding: "10px 30px 5px 30px",
        height: "55px",
        //backgroundColor: "#4444FF"
        backgroundColor: "#fff"
      },
      footer: {
        background: "#1e4ed6",
        padding: "30px"
      },
      footerPara: {
        color: "#fff",
        textAlign: "center",
        margin: 0
      },
      placeBtn: {
        background: "#1E4ED6",
        color: "#fff"
      },
      colorBlue: {
        color: "#1E4ED6",
        fontSize: "1.1em"
      }
    }

    return (
      <div>
        <Affix>
          <header style={style.header} className={this.state.class}>
            <div style={style.logoContainer}>
              <a href="/">
                <img src="/static/images/icons/mygoto.png" style={style.logo} />
              </a>
            </div>
            <div style={style.btnContainer}>
              {/* <ModelButton
              title="Add a Place"
              buttonValue="Add a Place"
              onSubmit={this.props.reloadBusiness}
              handleSubmitOk={() => {}}
              form={addBusinessMyGoto}
            /> */}
              <div style={style.faqLink}>
                <a href="/#faq" style={style.colorBlue}>
                  FAQ
                </a>
              </div>
              <Button href="/create" style={style.placeBtn} shape="round">
                Add a Place
              </Button>
            </div>
          </header>
        </Affix>
        {this.props.displayFilter ? (
          <HomeBanner />
        ) : (
          <MyGotoBanner
            diplaySearch={this.props.diplaySearch}
            diplayBusinessDetails={this.props.diplayBusinessDetails}
            background={this.props.background}
            handleSearch={this.props.handleSearch}
            businessName={this.props.businessName}
            location={this.props.location}
            isBusinessPage={this.props.isBusinessPage}
          />
        )}

        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 600px)"
          }}
        >
          {matches => (
            <div
              style={
                this.props.isBusinessPage
                  ? { padding: 0 }
                  : matches.large
                  ? { padding: "30px 50px" }
                  : { padding: "12px" }
              }
            >
              {this.props.displayFilter ? (
                <div>
                  <Search
                    placeholder="Enter your goto place"
                    onSearch={value => props.handleSearch(value)}
                    style={{ width: "250px", margin: "0 10px 20px 0" }}
                  />
                  <Select
                    showSearch
                    style={{ width: "250px", margin: "0 10px 20px 0" }}
                    placeholder="Select a City"
                    onChange={this.props.handleFilter}
                  >
                    {this.props.cityFilter.map(item => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                  <Button
                    onClick={this.props.reset}
                    shape="round"
                    style={style.placeBtn}
                  >
                    Reset
                  </Button>
                </div>
              ) : null}
              {this.props.children}
            </div>
          )}
        </Media>
        <footer style={style.footer}>
          <p style={style.footerPara}>MyGoto © 2019 | Powered By Finito</p>
        </footer>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default CsrTemplate
