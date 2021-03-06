import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    image: String,
    quantity: Number,
    price: Number,
},{
    timestamps: true,
});

const product = mongoose.model('Product', productSchema);

export default product;