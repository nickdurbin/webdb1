const accountRoutes = require("./account/accountRouter")

module.exports = server => {
  server.use("/api/accounts", accountRoutes)
}