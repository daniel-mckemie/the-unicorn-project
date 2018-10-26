const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

app.use("/", express.static("./build/"));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello'));

// Use routes
app.use('/api/users', users);





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
