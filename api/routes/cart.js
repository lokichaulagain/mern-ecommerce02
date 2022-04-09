const router = require("express").Router()
const Cart = require("../models/Cart")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")


//CREATE CART
//every user can create its own cart
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)

    } catch (error) {
        res.status(500).json(error)

    }
})


// //UPDATE CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedCart)

    } catch (error) {
        res.status(500).json(error)

    }
})



//DELETE A CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const cart = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted")

    } catch (error) {
        res.status(500).json(error)

    }

})


//GET USER CART
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const cart = await Cart.findOne({ user: req.params.id })
        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json(error)

    }

})


//GET ALL 
//Carts of all user .only Admin can see
router.get("/ ", verifyTokenAndAdmin, async (req, res) => {

    try {
        const allCarts = await Cart.find()
        res.status(200).json(allCarts)

    } catch (error) {
        res.status(500).json(error)

    }
})


module.exports = router

