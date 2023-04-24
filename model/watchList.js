const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: String
    },
    movie_id: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('WatchList', dataSchema)