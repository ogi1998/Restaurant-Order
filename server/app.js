import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import restaurantRoutes from './routes/restaurant.js';
import userRoutes from './routes/user.js';

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/restaurant', restaurantRoutes);
app.use('/user', userRoutes);




const CONNECTION_URL = process.env.DB;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch(error => console.log(error.message));

