const mongoose = require("mongoose");

const fooditem = new mongoose.Schema({

    name:{
        type: String,
        required:[true,'product name is requires'],
        maxlenght:[100,"maxlength is 100"]
    },

    price:{
        type:Number,
        required:[true,'product name is requires'],
        min:[0,"minimum price is 0"],
        max:[10000,"maximum price is 10000"]
    },

    image:{
        type:String,
        require:[true,"image is required"],
        validator: function(v){

            return /\.(jpg?g|png|webp)$/i.test(v)

        },
        message:prop => `${prop.value} - invalid image format ` 


    }


}
) 
module.exports = mongoose.model('product',fooditem);