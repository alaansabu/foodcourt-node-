const express = require("express");
const router = express.Router();
const {addFoodItems,getitem} = require('../controller/adminController')

//get 

router.get('/', getitem);
router.post('/add', addFoodItems);

module.exports = router; 