const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const logger = require('morgan');
const passport = require('passport')

const users = require('./routes/api/users');
const items = require('./routes/api/items');
const sizes = require('./routes/api/sizes');

const app = express();

app.use("/", express.static("./build/"));

//Body parser middleware
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));

// DB Config
const db = require('./config/keys').mongoURI;

mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));


// Use routes
app.use('/api/users', users);
app.use('/api/items', items);
app.use('/api/sizes', sizes);


// Test if in production
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));