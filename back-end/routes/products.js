import express from 'express'

import {getProducts, postProducts } from '../controllers/products.js'
const router = express.Router();

router.get('/',getProducts)
router.post('/add',postProducts)

export default router;