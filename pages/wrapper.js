import React from "react"
import Head from "next/head"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.drift()
    }

    drift = () => {
      !(function() {
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
              "on"
            ]),
            (t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments)
                return n.unshift(e), t.push(n), t
              }
            }),
            t.methods.forEach(function(e) {
              t[e] = t.factory(e)
            }),
            (t.load = function(t) {
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
              href="/static/images/icons/mygotoIcon.png"
              type="image/x-icon"
            ></link>
            <meta property="og:title" content="My Goto" />
            {/* <meta property="og:type" content="video.movie" />*/}
            <meta
              property="og:url"
              content="http://www.imdb.com/title/tt0117500/"
            />
            <meta
              property="og:image"
              content="https://file-upload-123.s3.ap-south-1.amazonaws.com/brandImages/1585596282121-mygoto.jpeg"
            />
            <meta
              property="og:description"
              content="Support your favorite Goto Places. They might need your help. Help them by getting their gift cards as a small gesture."
            />
          </Head>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  return App
}
