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
            meals: [{
                mealId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Restaurant'
                },
                quantity: Number
            }]
        }
    ],
    totalQuantity: Number,
    totalAmount: Number,
    creationDate: {
        type: Date,
        default: Date.now(),
      },
});

const Transaction = mongoose.model('Transaction', transationSchema);

export default Transaction;



