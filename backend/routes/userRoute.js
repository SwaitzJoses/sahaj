import express from "express";
const router = express.Router();
import {
    
    registerUser,deposit, withdraw, transfer
    
  } from "../controllers/userControllers.js";

  router.route("/").post(registerUser);
  router.put("/deposit", deposit)
  router.put("/withdraw", withdraw)
  router.put("/transfer", transfer)

  export default router;
  