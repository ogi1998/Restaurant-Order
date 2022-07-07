import Transaction from '../models/Transaction.js';



export const postTransaction= async (req, res) => {
    try {
        await Transaction.create(req.body);
        // console.log(req.body.restaurants);
    } catch(error) {
        res.status(400).json({status: 'error', message: error.message});
    }
};