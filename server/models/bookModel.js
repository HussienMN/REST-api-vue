const mongoose = require('mongoose')

//لعمل سكيما 
const Schema = mongoose.Schema

const bookModel = new Schema({
    title: {type:String},
    author: {type: String}
})

module.exports = mongoose.model('books', bookModel)