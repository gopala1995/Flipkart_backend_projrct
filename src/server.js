const express = require("express")

const app = express()
const connect = require("./configs/db")

const productControlar = require("./controlars/product.controlar")

app.use(express.json())

app.use("/electronics",productControlar)



app.listen(2222,async()=>{
    await connect()
    console.log("listening port from 2345...");
})