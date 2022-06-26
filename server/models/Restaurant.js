import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Name must be unique'],
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        unique: [true, 'Description must be unique'],
        required: [true, 'Description is required'] 
    },
    deliveryTime: {
        type: String, 
        required: [true, 'Delivery time is required']
    },
    deliveryPrice: {
        type: Number,
        required: [true, 'Delivery price is required']
    },
    workStart: {
        type: Number,
        required: [true, 'Work start is required']
    },
    workEnd: {
        type: Number,
        required: [true, 'Work end is required']
    },
    active: {
        type: Boolean,
        required: [true, 'Active is required'],
        default: true
    },
    meals: [
        {
            name: {
                type: String,
                required: [true, 'Meal name is required']
            },
            description: {
                type: String,
                required: [true, 'Meal description is required']
            },
            type: {
                type: String,
                required: [true, 'Meal type is required']
            },
            categories: [
                {
                    type: String,
                    required: [true, 'Meal needs to have categories']
                }
            ],
            price: {
                type: Number,
                required: [true, 'Meal needs to have price']
            }
        }
    ]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;