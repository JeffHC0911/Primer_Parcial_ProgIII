const express = require("express")
const routes = express.Router()
const compraSchema = require("../models/compra")

/*POST */
routes.post("/compra", (req, res) => {
    const compra = compraSchema(req.body)
    compra
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*GET */
routes.get("/", (req, res) => {
    compraSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.get("/:compraId", (req, res) => {
    const { compraId } = req.params
    compraSchema
        .findById(compraId)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.put("/:compraId", (req, res) => {
    const { compraId } = req.params
    const { DueDate,
        DNI,
        Status,
        Line,
        Vendor,
        TotalAmt } = req.body
    compraSchema
        .updateOne(
            { _id: compraId },
            { $set: { DueDate, DNI, Status, Line, Vendor, TotalAmt } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.delete("/:compraId", (req, res) => {
    const { compraId } = req.params
    compraSchema
        .remove({ _id: compraId })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = routes