let book = require('../models/bookModel');

exports.GetAllBooks = (req, res) => {
    try {
        book.find({}, (err, books) => {
            if (err) {
                console.error(err);
                res.status(401).end();
            } else {
                console.log(books);
                res.status(200).send(books);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};

exports.FindBookById = (req, res) => {
    try {
        book.findById(req.body.id, (err, success) => {
            if (err) {
                console.error(error);
                res.status(401).end();
            } else {
                res.status(200).send(book);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};

exports.AddBook = (req, res) => {
    try {
        console.log(req.body);
        book.create({
            author: req.body.author,
            title: req.body.title,
            date: req.body.date
        }, (err, book) => {
            if (err) {
                console.error(error);
                res.status(401).end();
            }
            else {
                console.log(`Book ${req.body.title} added.`);
                res.status(200).end();
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};