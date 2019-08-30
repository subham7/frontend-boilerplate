import React from "react"
import { Spin } from "antd"

const Loading = () => {
  const style = {
    loaderContainer: {
      height: "100vh",
      width: "100vw"
    },
    loader: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%)",
      transform: "translateY(-50%)"
    }
  }

  return (
    <div style={style.loaderContainer}>
      <Spin style={style.loader} size="large" tip="Loading..." />
    </div>
  )
}

export default Loading
