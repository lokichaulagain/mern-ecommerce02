const mongoose = require("mongoose");


//CartSchema
const CartSchema = new mongoose.Schema({
    //every user has one cart
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

        }],
    }

},{timestamp:true})


//Cart model and export
module.exports = mongoose.model("Cart", CartSchema);