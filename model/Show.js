const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Must provide description'],
        trim: true,
    },
    review: {
        type: String,
        required: false,
        trim: true,
        default: 'Add a review',
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Series', dataSchema);