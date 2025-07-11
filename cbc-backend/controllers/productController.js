import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {
    if(!isAdmin(req)){
        res.json({
            message: "You are not authorized to create a product"
        });
        return;
    }

    const newProductData = req.body;
     const product = new Product(newProductData);
    product
        .save()
        .then(() => {
            res.json({
                message: "Product created successfully",
            });
        })
        .catch((err) => {
            console.error(err);
            res.json({
                message: "Error creating product",
            });
        });
}

export function getProducts(req, res) {
    Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            console.error(err);
            res.json({
                message: "Error fetching products",
            });
        });
}