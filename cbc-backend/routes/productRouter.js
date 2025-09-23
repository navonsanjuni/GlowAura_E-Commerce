import express from 'express';
import { createProduct, getProducts, deleteProduct, getProductById } from '../controllers/productController.js';

const productRouter = express.Router();



productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById); // GET /api/products/:id
productRouter.post('/', createProduct);
productRouter.delete('/:id', deleteProduct); // DELETE /api/products/:id (admin only)

export default productRouter;