import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Meal name is required'],
  },
  description: {
    type: String,
    required: [true, 'Meal description is required'],
  },
  type: {
    type: String,
    required: [true, 'Meal type is required'],
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
  },
  ingredients: [
    {
      type: String,
      required: [true, 'Meal needs to have ingredients'],
    },
  ],
  categories: [
    {
      type: String,
      required: [true, 'Meal needs to have categories'],
    },
  ],
  price: {
    type: Number,
    required: [true, 'Meal needs to have price'],
  },
});

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Name must be unique'],
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  deliveryTime: {
    type: String,
    required: [true, 'Delivery time is required'],
  },
  deliveryPrice: {
    type: Number,
    required: [true, 'Delivery price is required'],
  },
  workStart: {
    type: Number,
    required: [true, 'Work start is required'],
  },
  workEnd: {
    type: Number,
    required: [true, 'Work end is required'],
  },
  active: {
    type: Boolean,
    required: [true, 'Active is required'],
    default: true,
  },
  imagePath: {
    type: String,
    required: [true, 'Image Path is required'],
  },
  meals: [mealSchema],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
