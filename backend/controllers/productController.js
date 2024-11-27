const Product = require("../models/productModel");



//create product -admin
exports.createProduct = async (req,res,next)=>{
 
    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//get all products
exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
        })
}

//update product --admin

exports.updateProduct = async(req,res,next)=>{

    let product = await Product.findbyId(req.params.id);

    if(!product){
        return res.status(500).json({
            suces:false,
            message:"Product not found"
        })
    }

    product = await Product.findbyIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        sucess:true,
        product
    })
}


//delete product

exports.deleteProduct = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            sucess:false,
            message:"product not found"
        })
    }
    await product.remove();

    res.status(200).json({
        sucess:true,
        message:"Product deleted successfully"
    })
};


