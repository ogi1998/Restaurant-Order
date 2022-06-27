import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});

        res.status(200).json({status: 'success', data: restaurants});
    } catch(error) {
        res.status(400).json({status: 'error', message: error.messaage});
    }
}

export const postRestaurant = async (req, res) => {

    try {
        const restaurant = await Restaurant.create(req.body);
    
        res.status(201).json({status: 'success', data: restaurant});
    } catch(error) {
        res.status(400).json({status: 'error', message: error.message});
    }
};

export const deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.deleteOne({_id: req.params.id});

        res.status(204);
    } catch(error) {
        res.status(400).json({status: 'error', message: error.message});
    }
}