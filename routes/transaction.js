import express from "express";

// import { protect } from '../middleware/authMiddleware.js';
import { postTransaction } from "../controllers/transaction.js";

const router = express.Router();

router.post("/", postTransaction);

export default router;
