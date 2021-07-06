const express = require('express');
let router = express.Router();

let bookController = require('../controllers/bookController');

router.get('/all', bookController.GetAllBooks);
router.get('/find', (req, res) => {bookController.FindBookById(req, res)});
router.post('/add', (req, res) => {bookController.AddBook(req, res)});

module.exports = router;
