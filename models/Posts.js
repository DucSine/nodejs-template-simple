const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Posts', PostsSchema, 'posts')