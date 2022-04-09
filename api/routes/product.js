const router = require("express").Router()
const Product = require("../models/Product")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")


//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)//take everything which was sent in the body and put it in the newProduct

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)

    } catch (error) {
        res.status(500).json(error)

    }
})


//UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json(error)

    }
})



//DELETE A PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")

    } catch (error) {
        res.status(500).json(error)

    }

})


//GET A PRODUCT
router.get("/find/:id", async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json(error)

    }

})


//GET ALL PRODUCTS || Or with query
router.get("/", async (req, res) => {

    //query
    const queryNew = req.query.new//fetching products according to newly created
    const queryCategory = req.query.category//fetching products according to category

    try {
        let products //array of products

        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)

        } else if (queryCategory) {
            products = await Product.find({ categories: { $in: [queryCategory] } })


        } else {
            products = await Product.find()
        }

        res.status(200).json(products)

    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router

