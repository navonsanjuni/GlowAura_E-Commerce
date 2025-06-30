import express from 'express';
import { get } from 'mongoose';
import { createProduct, getProducts, deleteProduct } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProduct);

productRouter.delete("/", deleteProduct);

productRouter.get("/:name", getProductByName);

export default productRouter;