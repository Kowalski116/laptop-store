import Product from '../models/product.js'

export const getProducts = async (req,res) => {
    try{
        const products = await Product.find();

        res.status(200).json(products);
    } catch(e){
        res.status(404).json({message: e.message});
    }
}

export const postProducts = async (req,res) => {

    const post = req.body;
    console.log(req.body)
    const newProduct = new Product(post);
    
    try{
        await newProduct.save();

        res.status(201).json('New product added');
    } catch (errror) {
        res.status(409).json({ message: errror.message})
    }
} 
