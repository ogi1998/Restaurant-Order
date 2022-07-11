import express from 'express';

import { deleteRestaurant, getMeals, getMeal, getRestaurants, postRestaurant } from '../controllers/restaurants.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getRestaurants);

router.post('/', protect, postRestaurant);

router.delete('/:id', protect, deleteRestaurant);

router.get('/:id/meals', protect, getMeals);

router.get('/:id/meals/:id2', protect, getMeal);


export default router;