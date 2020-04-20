import React from "react"
import Head from "next/head"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"

import styles from "./styles"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // this.drift()
      // this.gAnalytics()
      // this.fbPexel()
    }

    fbPexel = () => {
      const options = {
        autoConfig: true, // set pixel's autoConfig
        debug: false, // enable logs
      }
      ReactPixel.init("551809379026362", options)

      ReactPixel.pageView() // For tracking page view
      // ReactPixel.track(event, data) // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
      // ReactPixel.trackCustom(event, data)
    }

    gAnalytics = () => {
      ReactGA.initialize("GTM-TZ4424P")
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    drift = () => {
      !(function () {
        var t = (window.driftt = window.drift = window.driftt || [])
        if (!t.init) {
          if (t.invoked)
            return void (
              window.console &&
              console.error &&
              console.error("Drift snippet included twice.")
            )
          ;(t.invoked = !0),
            (t.methods = [
              "identify",
              "config",
              "track",
              "reset",
              "debug",
              "show",
              "ping",
              "page",
              "hide",
              "off",
              "on",
            ]),
            (t.factory = function (e) {
              return function () {
                var n = Array.prototype.slice.call(arguments)
                return n.unshift(e), t.push(n), t
              }
            }),
            t.methods.forEach(function (e) {
              t[e] = t.factory(e)
            }),
            (t.load = function (t) {
              var e = 3e5,
                n = Math.ceil(new Date() / e) * e,
                o = document.createElement("script")
              ;(o.type = "text/javascript"),
                (o.async = !0),
                (o.crossorigin = "anonymous"),
                (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js")
              var i = document.getElementsByTagName("script")[0]
              i.parentNode.insertBefore(o, i)
            })
        }
      })()
      drift.SNIPPET_VERSION = "0.3.1"
      drift.load("wrtr7rxsti9r")
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
              href="/static/icons/Fevicon.png"
              type="image/x-icon"
            ></link>
            <meta property="og:title" content="Be a #SuperCustomer" />
            <meta
              property="og:image"
              content="https://mygoto.in/static/icons/social.jpg"
            />
            <meta
              property="og:description"
              content="Buy MyGoto vouchers now and be a #SuperCustomer for your favourite goto places."
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <WrappedComponent {...this.props} />
          </body>

          <style jsx>{styles}</style>
        </div>
      )
    }
  }

  return App
}
