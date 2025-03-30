// server.js
const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const PORT = 3000;
const connectDB = require("./config/db")
// Sample route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
connectDB();