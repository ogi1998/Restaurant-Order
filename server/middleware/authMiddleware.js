import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1];
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
      } catch (error) {
        res.status(401).json({status: 'fail', message: 'Not authorized'});
      }
    }
  
    if (!token) {
      res.status(401).json({status: 'fail', message: 'Not authorized, no token'});
    }
};