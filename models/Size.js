const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SizeSchema = new Schema({
	size: {
		type: String,
		required: true
	},
	price: {
		type: Number,
	},
});

module.exports = Size = mongoose.model('sizes', SizeSchema)