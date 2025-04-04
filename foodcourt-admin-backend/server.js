// server.js
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/routes")
const fooditem = require("./models/fooditem")
console.log
require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const PORT = 3000;
const connectDB = require("./config/db")


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//routes

connectDB().then(()=>{

    app.use("/api/v1/products",router);


})

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
