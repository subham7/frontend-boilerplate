import React from "react"
import Head from "next/head"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
          <Head>
            <title>MyGoto</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <link
              rel="icon"
              href="/static/images/icons/mygotoIcon.png"
              type="image/x-icon"
            ></link>
          </Head>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  return App
}
