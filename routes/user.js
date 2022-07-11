import express from 'express';

import {loginPost, registerPost} from '../controllers/users.js';

const router = express.Router();

router.post('/register', registerPost);
router.post('/login', loginPost);


export default router;