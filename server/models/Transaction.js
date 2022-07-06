import mongoose from 'mongoose';

const transationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurants: [
        {
            restaurantId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant'
            },
            meals: {
                mealId: String,
                quantity: Number
            }
        }
    ],
    totalQuantity: Number,
    totalAmount: Number
});

const Transaction = mongoose.model('Transaction', transationSchema);

export default Transaction;



