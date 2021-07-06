const express = require('express');
const dbConnect = require('./data/mongo');
const app = new express();

let port = 4000;

let bookRouter = require('./routes/catalog');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRouter);

app.listen(port, () => {
    console.log('Server is running on Port: ' + port);
    dbConnect();
});