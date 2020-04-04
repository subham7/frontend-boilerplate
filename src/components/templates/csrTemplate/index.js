import React from "react"
import Media from "react-media"
import { Affix, Button, Input, Select } from "antd"
const { Search } = Input
import ModelButton from "./../../molecules/modelButton"
import MyGotoBanner from "./../../organisms/myGotoBanner"
import HomeBanner from "./../../organisms/homeBanner"

const { Option } = Select

const csrTemplate = props => {
  return (
    <div>
      <Affix>
        <header style={style.header}>
          <div style={style.logoContainer}>
            <a href="/">
              <img
                src="/static/images/icons/mygotowhite.png"
                style={style.logo}
              />
            </a>
          </div>
          <div style={style.btnContainer}>
            {/* <ModelButton
              title="Add a Place"
              buttonValue="Add a Place"
              onSubmit={props.reloadBusiness}
              handleSubmitOk={() => {}}
              form={addBusinessMyGoto}
            /> */}
            <Button href="/create">Add a Place</Button>
          </div>
        </header>
      </Affix>
      {props.displayFilter ? (
        <HomeBanner />
      ) : (
        <MyGotoBanner
          diplaySearch={props.diplaySearch}
          diplayBusinessDetails={props.diplayBusinessDetails}
          background={props.background}
          handleSearch={props.handleSearch}
          businessName={props.businessName}
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
              matches.large ? { padding: "30px 50px" } : { padding: "12px" }
            }
          >
            {props.displayFilter ? (
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
                  onChange={props.handleFilter}
                >
                  {props.cityFilter.map(item => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
                <Button onClick={props.reset}>Reset</Button>
              </div>
            ) : null}
            {props.children}
          </div>
        )}
      </Media>
      <footer style={style.footer}>
        <p style={style.footerPara}>MyGoto © 2019 | Powered By Finito</p>
      </footer>
    </div>
  )
}

const style = {
  logoContainer: {
    float: "left"
  },
  logo: {
    height: "35px",
    width: "auto"
  },
  btnContainer: {
    float: "right"
  },
  header: {
    padding: "15px",
    height: "65px",
    //backgroundColor: "#4444FF"
    backgroundColor: "#1e4ed6"
  },
  footer: {
    background: "#1e4ed6",
    padding: "30px"
  },
  footerPara: {
    color: "#fff",
    textAlign: "center",
    margin: 0
  }
}

export default csrTemplate
