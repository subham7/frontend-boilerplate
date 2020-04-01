const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // server.get("/dashboard/:page", (req, res) => {
    //   const actualPage = "/dashboard"
    //   const queryParams = { page: req.params.page }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get("/dashboard/:page/tabs/:tabid", (req, res) => {
    //   const actualPage = "/dashboard"
    //   const queryParams = {
    //     page: req.params.page,
    //     tab: req.params.tabid
    //   }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get("/mygoto/:page", (req, res) => {
    //   const actualPage = "/mygoto"
    //   const queryParams = { page: req.params.page }
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.get("/", (req, res) => {
      const actualPage = "/"
      const queryParams = {}
      app.render(req, res, actualPage, queryParams)
    })

    server.get("/create", (req, res) => {
      const actualPage = "/create"
      const queryParams = {}
      app.render(req, res, actualPage, queryParams)
    })

    server.get("/:id", (req, res) => {
      const actualPage = "/business"
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log("> Ready on http://localhost:3000")
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
