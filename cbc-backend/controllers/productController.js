import Product from "../models/product.js";

export function getProducts(req, res) {
    Product.find()
      .then((productList)=>{
        res.json({
            message: "Products fetched successfully",
            list: productList
        })
      }).catch(()=>{
        res.json({
            message: "Error fetching products"
        })
      })
}

export function createProduct(req, res) {
    const product = new Product(req.body);

    product.save()
      .then(()=>{
        res.json({
            message: "Product added successfully"
        })
      }).catch(()=>{
        res.json({
            message: "Error adding product"
        })
      })
}

export function deleteProduct(req, res) {
    Product.deleteOne({ name: req.body.name })
      .then(()=>{
        res.json({
            message: "Product deleted successfully"
        })
      }).catch(()=>{
        res.json({
            message: "Error deleting product"
        })
      })
}