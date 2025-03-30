const mongoose = require("mongoose");

const mongooseSchema = new mongooseSchema({

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


}
) 