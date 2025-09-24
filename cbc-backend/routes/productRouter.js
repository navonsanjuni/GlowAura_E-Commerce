import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
} from "../controllers/productController.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", auth, role("admin"), createProduct);
productRouter.delete("/:id", auth, role("admin"), deleteProduct);

export default productRouter;
