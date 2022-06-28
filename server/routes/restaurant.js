import express from 'express';

import { deleteRestaurant, getMeals, getMeal, getRestaurants, postRestaurant } from '../controllers/restaurants.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getRestaurants);

router.post('/', postRestaurant);

router.delete('/:id', deleteRestaurant);

router.get('/:id/meals', getMeals);
router.get('/:id/meals/:id2', getMeal);


export default router;