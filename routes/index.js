const express = require("express")
const compraRouter = require("./compraRouter")

function routerApi(app){
    const router = express.Router()
    app.use("/api/v1", router)
    router.use("/compras", compraRouter)
}

module.exports = routerApi