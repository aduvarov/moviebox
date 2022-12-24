const { application } = require('express');
const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017/moviebox';
let dbConnection;

module.exports = {
    connectToDb: cb => {
        MongoClient.connect(URL)
            .then(client => {
                dbConnection = client.db();
                console.log(`SUCESS: connection to MongoDB`);
                return cb();
            })
            .catch(error => {
                return cb(error);
            });
    },
    getDb: () => dbConnection,
};
