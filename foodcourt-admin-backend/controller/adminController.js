const multer = require("multer");
const path = require('path');
const fooditem = require('../models/fooditem');

const uploads = multer({dest:path.join(__dirname,'../uploads/')})





//post food item details
const addFoodItems = [
    uploads.single('image'),

        async(req,res)=>{

                try {

                    const{name,price} = req.body;
                    const image = req.file? req.file.path :null;

                    const newfooditem = new fooditem({name,price,image});
                    await newfooditem.save()
                    res.status(201).json(newfooditem)

                } catch (error) {
                    
                    console.log("unable to execute post req",error);
                    
                }


        }

    

]


// get fooditem

const getitem = async(req,res)=>{


    try {
        
        const getfooditems = fooditem.find();
        res.status(200).json(getfooditems)


    } catch (error) {
        res.status(500).json({message:"server error"});
    }


}







module.exports = {addFoodItems,getitem};