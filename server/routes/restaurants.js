import express from 'express';

import { getRestaurants, postRestaurant } from '../controllers/restaurants.js';

const router = express.Router();

router.get('/', getRestaurants);

router.post('/', postRestaurant);


export default router;