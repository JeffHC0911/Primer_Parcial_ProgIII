const mongoose = require("mongoose")
const compraSchema = mongoose.Schema({
    DueDate: {
        type: String,
        required: true,
    },
    DNI: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Line: {
        type: Object,
        required: true,
        Amount: {
            type: Number,
            required: true,
        },
        DetailType: {
            type: String,
            required: true,
        },
        ExpenseDetail: {
            type: Object,
            required: true,
            Customer: {
                value: {
                    type: String,
                    required: true,
                },
                Name: {
                    type: String,
                    required: true,
                },
                Ref: {
                    type: Object,
                    required: true,

                    value: {
                        type: String,
                        required: true,
                    },
                    name: {
                        type: String,
                        required: true,
                    },
                },
            },
            Account: {
                value: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
            },
            LineStatus: {
                type: String,
                required: true,
            },
        },
    },
    Vendor: {
        type: Object,
        required: true,

        value: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    TotalAmount: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('CompraCollection', compraSchema)