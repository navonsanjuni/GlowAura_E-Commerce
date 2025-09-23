import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function getProductById(req, res) {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) return res.status(404).json({ message: "Product not found" });
            res.json(product);
        })
        .catch(() => res.status(500).json({ message: "Error fetching product" }));
}

export function deleteProduct(req, res) {
    if (!req.user || req.user.type !== "admin") {
        return res.status(403).json({ message: "Not authorized" });
    }
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Product deleted successfully" }))
        .catch(() => res.status(500).json({ message: "Error deleting product" }));
}

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