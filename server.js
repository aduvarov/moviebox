const express = require('express');
const { getDb, connectToDb } = require('./db');

const PORT = 3000;
const app = express();

let db;

connectToDb(error => {
    if (!error) {
        app.listen(PORT, error => {
            error ? console.error : console.log(`Application is running on port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`ERROR: ${error}`);
    }
});

app.get('/movies', (req, res) => {
    const movies = [];
    db.collection('movies')
        .find()
        .sort({ rating: 1 })
        .forEach(movie => movies.push(movie))
        .then(() => {
            res.status(200).json(movies);
        })
        .catch(error => {
            console.log(`ERROR: ${error}`);
            res.status(500).json({ error: 'Something wrong' });
        });
});
