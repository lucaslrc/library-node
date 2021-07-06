const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: String,
    title: String,
    date: Date
});

module.exports = mongoose.model('book', bookSchema, 'books'); 