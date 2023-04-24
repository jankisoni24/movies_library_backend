const express = require('express');

const router = express.Router();

const User = require('../model/user');
const Movie = require('../model/moviesList');
const WatchList = require('../model/watchList');

//Post Method
router.post('/create_user', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        const data = new User({
            uid: req.body.uid,
            name: req.body.name,
            authProvider: req.body.authProvider,
            email: req.body.email
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    } else {
        res.status(200).json(user)
    }
});

router.get('/get_all_movies', async (req, res) => {
    try{
        const data = await Movie.find();
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/create_watchlist', async (req, res) => {
    const watchList = await WatchList.findOne({user_id: req.body.user_id, movie_id: req.body.movie_id});
    if(!watchList) {
        const data = new WatchList({
            user_id: req.body.user_id,
            movie_id: req.body.movie_id
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message});
        }
    } else {
        res.status(200).json(watchList);
    }
});
router.post('/get_watchlist_movies', async (req, res) => {
    try{
        const watchList = await WatchList.find({user_id: req.body.user_id});
        res.status(200).json(watchList);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/search_movies', async (req, res) => {
    try{
        const data = await Movie.find( { $or:[ {'title': { $regex: '.*' + req.body.query + '.*' }}, {'genre':{ $regex: '.*' + req.body.query + '.*' }} ]})
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;