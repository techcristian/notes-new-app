const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const mongodb = process.env.MONGODB_URI;






mongoose.connect(mongodb, {})
    .then(db => console.log('db is connected', db.connection.name))
    .catch(err => console.log(err))