import Transaction from '../models/Transaction';



export const postTransaction= async (req, res) => {
    try {
        await Transaction.create();
    } catch(error) {
        res.status(400).json({status: 'error', message: error.message});
    }
};