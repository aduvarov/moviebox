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
        db = getDb;
    } else {
        console.log(`ERROR: ${error}`);
    }
});
