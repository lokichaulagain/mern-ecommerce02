const mongoose = require("mongoose");


//ProductSchema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    desc: {
        type: String,
        required: true,
        trim: true,
    },

    productImg: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },

    categories: {
        type: Array,
    },
    
    size: {
        type: string,
    },

    color: {
        type: string,
    },

    price: {
        type: Number,
        required: true,
    }
})


//Product model and export
module.exports = mongoose.model("Product", ProductSchema);