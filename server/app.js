const express = require('express')
const logger = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = 3000

const booksRouter = require('./router/booksRouter')

app.use(logger('dev'))
app.use(bodyparser.urlencoded({extended: true}))
mongoose.connect('mongodb://localhost:27017/bookStore', {useNewUrlParser: true, useUnifiedTopology: true});

//https://localhost:3500/books/api go to this router (bookRouter) 
app.use('/books/api', booksRouter)

// app.get('/', (req,res)=>{
//     res.send('this is book api')
// })

app.listen(port, ()=>{console.log(`app is running on port : https://localhost:${port}`)})