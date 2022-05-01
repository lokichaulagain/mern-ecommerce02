const mongoose = require('mongoose');


//UserSchema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
        maxlength: 20,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    profilePic: {
        type: String,
        default: ""
    },
    profession: {
        type: String,
    }


}, { timestamps: true })


//User model and export
module.exports = mongoose.model("User", UserSchema)