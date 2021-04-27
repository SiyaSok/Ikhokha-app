import express from 'express';
import {
    getAllProducts, postProduct, getProductById, deletegetProductById, updateProductPost
} from '../controllers/ProductsControllers.js'



const router = express.Router();


router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.post("/", postProduct)
router.patch("/:id", updateProductPost)
router.delete("/:id", deletegetProductById)

export default router;
