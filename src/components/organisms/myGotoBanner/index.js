import React from "react"
import Media from "react-media"
import { Affix, Button, Input, Select } from "antd"
const { Search } = Input
import styles from "./styles.js"

const banner = props => {
  const style = {
    banner: {
      height: "350px",
      background: props.background,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
      // backgroundImage: "url(/static/images/MyGoToBG.jpg)"
    },
    bannerPosition: {
      position: "relative",
      top: "80px",
      padding: "10px"
    },
    bannerh1: {
      textAlign: "center",
      color: "#fff",
      fontSize: "3em",
      marginBottom: 0
    },
    bannerP: { textAlign: "center", color: "#fff", fontSize: "1.3em" },
    searchLg: {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "500px"
    },
    searchSm: {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%"
    },
    businessDetail: {
      padding: "30px"
    },
    bussHeading: {
      color: "#fff",
      fontSize: "3em",
      marginBottom: "0",
      background: "#000",
      display: "inline-block",
      padding: "0 10px"
    },
    bussCity: {
      color: "#fff"
    },
    yellowText: {
      color: "#FFC600"
    }
  }

  return (
    <div style={style.banner}>
      {props.diplaySearch ? (
        <div style={style.bannerPosition}>
          <h1 className="bannerh1">
            Support your favourite <span style={style.yellowText}>Go-to</span>{" "}
            places.
          </h1>
          <p className="bannerP">
            Buy gift card now and{" "}
            <span style={style.yellowText}>"flatten the curve"</span> for them.
          </p>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 600px)"
            }}
          >
            {matches => (
              <div>
                {matches.small && (
                  <Search
                    size="large"
                    placeholder="Enter your goto place"
                    onSearch={value => props.handleSearch(value)}
                    style={style.searchSm}
                  />
                )}
                {matches.large && (
                  <Search
                    size="large"
                    placeholder="Enter your goto place"
                    onSearch={value => props.handleSearch(value)}
                    style={style.searchLg}
                  />
                )}
              </div>
            )}
          </Media>
        </div>
      ) : null}
      {props.diplayBusinessDetails ? (
        <div style={style.businessDetail}>
          <h1 style={style.bussHeading}>{props.businessName}</h1>
          {/* <h3 style={style.bussCity}>Delhi</h3> */}
        </div>
      ) : null}
      <style jsx>{styles}</style>
    </div>
  )
}

export default banner
