import Restaurant from "../models/Restaurant.js";

import { getErrors } from './errorController.js';

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
        res.status(400).json({status: 'error', message: getErrors(error, Restaurant)});
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

export const getMeals = async (req, res) => {
    try {
        const meals = await Restaurant.findById(req.params.id).select('meals.name meals.description meals.price meals._id');

        res.status(200).json({status: 'success', data: meals});
    } catch(error) {
        res.status(400).json({status: 'error', message: error.messaage});
    } 
};

export const getMeal = async (req, res) => {
    try {
        const rest = await Restaurant.findById(req.params.id).select('meals');
        
        const meal = rest.meals.id(req.params.id2);

        res.status(200).json({status: 'success', data: meal});
    } catch(error) {
        res.status(400).json({status: 'error', message: error.messaage});
    } 
};