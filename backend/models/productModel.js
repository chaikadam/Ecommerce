const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannotb exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                 type:String,
                required:true
            },
    
        url:{
            type:String,
            required:true
        }
    }
    
],
   category:{
    type:String,
    required:[true,"please enter product category"]

   },
   stock:{
    type:Number,
    required:[true,"please enter product stock"],
    maxLength:[4,"stocj cannot exceed 5 4 char"],
    default:1
   },
   reviews:[{
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true
    }
   }
]   ,
createdAt:{
    type:Date,
    default:Date.now
}  

})

module.exports = mongoose.model("Product",productSchema);