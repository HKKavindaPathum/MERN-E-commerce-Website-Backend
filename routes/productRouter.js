import express from "express";
import { deleteProduct, getProductById, getProducts, saveProduct, searchProducts, updateProduct, getProductsByCategory } from "../controllers/productController.js";

const productRouter = express.Router()

productRouter.get("/", getProducts);
productRouter.post("/", saveProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId", updateProduct);
productRouter.get("/search/:query",searchProducts)
productRouter.get("/category/:category", getProductsByCategory);
productRouter.get("/:productId", getProductById)

export default productRouter;