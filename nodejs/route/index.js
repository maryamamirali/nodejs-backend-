import express from 'express'
import products from './product.js'

const router = express.Router()

router.use('/products', products)

export default router