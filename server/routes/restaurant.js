import express from 'express';

import { deleteRestaurant, getRestaurants, postRestaurant } from '../controllers/restaurants.js';

const router = express.Router();

router.get('/', getRestaurants);

router.post('/', postRestaurant);

router.delete('/:id', deleteRestaurant);


export default router;