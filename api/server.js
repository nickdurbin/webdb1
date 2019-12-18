const express = require('express');
const server = express();
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json());
middleware(server)
routes(server)

server.get("/", (req, res) => {
  res.send("<h1>I'm aliveeeeee!</h1>")
})

server.use((req, res) => {
  res.status(404).json({ message: "What you seek does not exist. Please make another selection."})
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: "We have failed you on your quest."})
})

module.exports = server;