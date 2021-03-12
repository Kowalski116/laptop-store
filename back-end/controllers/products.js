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
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
} 
export const getOneProduct = (req,res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(error => res.status(400).json({ message: error.message}))
} 

export const deleteProduct = (req,res) => {
    Product.findByIdAndDelete(req.params.id)
        .then( () => res.json('Product deleted'))
        .catch( error => res.status(400).json({ message: error.message}))
} 

export const updateProduct = (req,res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.description = req.body.description;
            product.image = req.body.image;
            product.quantity = req.body.quantity;
            product.price = req.body.price;
            product.save()
                .then(() => res.json('Product updated'));
            })
        .catch(error => res.status(400).json({ message: error.message}))
} 