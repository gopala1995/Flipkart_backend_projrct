const express = require("express")

const router = express.Router()

const Product = require("../models/product.model")

router.get("/:id",async(req,res)=>{
    const product = await Product.findById(req.params.id).lean().exec()
    return res.status(200).send(product)
})


module.exports = router