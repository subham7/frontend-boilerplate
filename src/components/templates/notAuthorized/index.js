import React from "react"

const style = {
  textContainer: {
    height: "100%",
    width: "100%"
  },
  text: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: "400px",
    height: "400px",
    display: "table"
  },
  image: {
    height: "120px",
    width: "auto"
  },
  card: {
    display: "table-cell",
    verticalAlign: "middle",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    borderRadius: "6px"
  }
}

const app = () => {
  return (
    <div style={style.textContainer}>
      <div style={style.text}>
        <div style={style.card}>
          <img
            src="/static/images/icons/accessdenied.png"
            alt="Access Denied"
            style={style.image}
          />
          <br />
          <br />
          <h4> You are not authorized</h4>
        </div>
      </div>
    </div>
  )
}

export default app
