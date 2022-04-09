const express = require('express') //express library
const app = express() //using express in our app
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")


//MongoDB connection
mongoose.connect(process.env.MONGO_URL)//its a promise so we can use .then and .catch
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))


//Middleware
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)




//post listening
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");

})