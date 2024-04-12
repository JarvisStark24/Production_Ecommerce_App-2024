import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//Routes
//Create Products Route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//UPdate Product Router
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//Get All Products
router.get("/get-product", getProductController);

//Get Single Product
router.get("/get-product/:slug", getSingleProductController);

//Get Photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Product Route
router.delete("/delete-product/:pid", deleteProductController);

//Filter Product
router.post("/product-filters", productFiltersController);

// Product Counts
router.get("/product-count", productCountController);

// Product Per Page
router.get("/product-list/:page", productListController); // Get All Products Per Page

//Search Product Route
router.get("/search/:keyword", searchProductController);

//Similar Products Route
router.get("/related-product/:pid/:cid", realtedProductController); // Get All Products Per Page

//Category wise Product Route
router.get("/product-category/:slug", productCategoryController); // Get All Products Per Page

//Payments Route
//token
router.get("/braintree/token", braintreeTokenController)

//Payments Route
router.post("/braintree/payment", requireSignIn, braintreePaymentController)

export default router;
