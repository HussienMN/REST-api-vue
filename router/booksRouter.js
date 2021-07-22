const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/bookModel')


bookRouter.route('/') //if the Method of http request is GET we want then to retrive  books from DB
    .get((req,res)=>{
        Book.find({}, (err,books)=>{
            if(err){
                res.statusCode(404).json({msg:'keine Bücher gefunden'})
            }
            res.json(books)
        })
})//if the Method of http request is POST then we want to insert a book in DB
    .post((req,res)=>{
        let book = new Book(req.body)
        book.save()
        res.status(201).json(book)
})
//to make delete or update due to id 
bookRouter.route('/:bookId')
    .put((req,res)=>{
        Book.findById(req.params.bookId, (err, book)=>{
            book.title = req.body.title,
            book.author = req.body.author
            book.save()
            res.json(book)
        })
    })
    .delete((req,res)=>{
        Book.findById(req.params.bookId, (err, book)=>{
            book.remove(err =>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(204).send('removed')
            })
        })
    })
module.exports = bookRouter