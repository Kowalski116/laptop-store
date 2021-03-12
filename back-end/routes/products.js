import express from 'express'

import {getProducts, postProducts, getOneProduct, updateProduct, deleteProduct } from '../controllers/products.js'
const router = express.Router();

router.get('/',getProducts)
router.post('/add',postProducts)
router.get('/:id',getOneProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router;