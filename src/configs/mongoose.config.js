const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB)
    .then(() => {
        console.log('MongoDB Connected!');
    }).catch((err) => {
        console.error(`MongoDB Connection Error: ${err}`);
    }
);
