const express = require('express');
const mongoose = require('mongoose');
// const Movie = require('./models/movie');
const movieRoutes = require('./routes/movie-routes');
const PORT = 3000;
const URL = 'mongodb://localhost:27017/moviebox';

const app = express();
app.use(express.json());
app.use(movieRoutes);
mongoose.set('strictQuery', false);

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(`DB connection error: ${err}`));

app.listen(PORT, error => {
    error ? console.error : console.log(`Application is running on port ${PORT}`);
});
