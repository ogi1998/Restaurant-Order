import express from 'express';

import { deleteRestaurant, getRestaurants, postRestaurant } from '../controllers/restaurants.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getRestaurants);

router.post('/', postRestaurant);

router.delete('/:id', deleteRestaurant);


export default router;