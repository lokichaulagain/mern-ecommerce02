const mongoose = require("mongoose");


//OrderSchema //after purchasing product
const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    products: {
        type: [{
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }]
    },

    amount: {
        type: Number,
        required: true
    },

    address: {
        type: Object,//strip library return us an object
        required: true,
    },

    status: {
        type: String,
        default: "pending",
    },

}, { timestamps: true })


//Order model and exporting it
module.exports = mongoose.model("Order", OrderSchema);