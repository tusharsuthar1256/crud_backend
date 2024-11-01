import { Router } from "express";
import {
     createProduct,
     deleteProduct,
     getAllProducts,
     getProductById,
     updateProduct
} from "../Controller/Product.controller.js";



const productRouter = Router();



productRouter.post("/",createProduct);
productRouter.put("/:id",updateProduct);
productRouter.delete("/:id",deleteProduct);
productRouter.get("/all",getAllProducts);
productRouter.get("/:id",getProductById)


export default productRouter;

