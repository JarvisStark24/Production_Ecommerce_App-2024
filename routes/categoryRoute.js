import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//Routes

//Create Category Route
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//Update Category Route
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get All Category Route
router.get("/get-category", categoryController);

//Single Category Route
router.get("/single-category/:slug", singleCategoryController);

//Delete Category Route
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);

export default router;
