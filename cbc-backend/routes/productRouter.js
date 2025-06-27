import express from 'express';
import { get } from 'mongoose';
import { createProduct, getProducts, deleteProduct } from '../controllers/productController';

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProduct);

productRouter.delete("/", deleteProduct);

export default productRouter;