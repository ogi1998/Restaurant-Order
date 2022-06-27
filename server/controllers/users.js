import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const signJWT = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

export const registerPost = async (req, res) => {
    try {
        const user = await User.create({...req.body});

        const token = signJWT(user._id);
        // usually we put it in cookies, cant do the same here

        res.status(201).json({
            status: 'success',
            user,
            token
        });

    } catch(error) {
        res.status(400).json({status: 'error', message: error.message});
    }
}; 

export const loginPost = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.login(username, password);
        const token = signJWT(user._id);
        // usually we put it in cookies, cant do the same here

        res.status(200).json({
            status: 'success',
            user,
            token
        })

    } catch(error) {

    }
};