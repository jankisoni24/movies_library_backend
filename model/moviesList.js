const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    release_year: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Movie', dataSchema)