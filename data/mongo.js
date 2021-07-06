const mongoose = require('mongoose');

const url = '';

module.exports = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database is running...');
    });
};