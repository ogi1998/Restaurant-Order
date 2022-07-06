import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', transactionPost);