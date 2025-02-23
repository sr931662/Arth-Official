const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path:'./config.env' })
const DB = process.env.MONGO_URI + 'Arth?retryWrites=true&w=majority'

const PORT = process.env.PORT
const connectDB = async () => {
    try {
        await mongoose.connect(DB)
        console.log("Database connected !!!")
        
    }
    catch (err) {
        console.error("Database connection failed")
        process.exit(0)
    }
}
module.exports = connectDB