const express = require("express");

const { middlewareOne, middlewareTwo } = require("./middlewares")

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use(middlewareOne)

app.use(middlewareTwo)

app.use("/users", (req, res, next) => {
  res.send("<div><h1>USERS PAGE!</h1></div>")
})

app.use("/", (req, res, next) => {
  res.send("<div><h1>HOME PAGE!</h1></div>")
})

app.listen(3000)