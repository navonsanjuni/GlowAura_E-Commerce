import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  altNames: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  lastPrice: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
