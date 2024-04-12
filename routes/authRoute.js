import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//Router object
const router = express.Router();

//Routing
//Register || Method POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//Test route
router.get("/test", requireSignIn, isAdmin, testController);

//Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Update Profile Route
router.put("/profile", requireSignIn, updateProfileController);

//Orders
router.get("/orders", requireSignIn, getOrdersController);

//All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//Order Status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController)

export default router;
