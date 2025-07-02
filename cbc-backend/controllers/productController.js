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

  console.log(req.user);

  if(req.user == null){
    res.json({
        message: "You are not logged in"
    })
    return;
  }
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

export function getProductByName(req,res){
  const nameNew =  req.params.name;

  Product.find({name : nameNew}).then(
    (productList) => {
      res.json({
        message: "Product fetched successfully",
        list: productList
      })
    }
  ).catch(() => {
    res.json({
      message : "Error fetching product"
    })
  })
}