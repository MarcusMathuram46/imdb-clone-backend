const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    bio: String
})

module.exports = mongoose.model('Producer', producerSchema);