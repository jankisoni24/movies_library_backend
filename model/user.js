const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    uid: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    authProvider: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('User', dataSchema)