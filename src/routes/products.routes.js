import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getTotalProducts,
  getProductById,
  deleteProductById,
  updateProductById
} from "../controllers/products.controller";

const router = Router();

// rutas
router.get("/", (req, res) => {
  res.send("Hola desde Home");
});
router.get("/products", getProducts);
router.post("/products", createNewProduct);
router.get("/products/count", getTotalProducts);
router.get("/products/:Id", getProductById);
router.delete("/products/:Id", deleteProductById);
router.put("/products/:Id", updateProductById);

export default router;
