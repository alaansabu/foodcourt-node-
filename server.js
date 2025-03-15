// server.js
const express = require("express")
const app = express();
const PORT = 3000;

// Sample route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));