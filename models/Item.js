const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
	Name: {
		type: String,
		required: true
	},
	size: {
		type: String,
		required: true
	},
	price: {
		type: Number,
	},
});

module.exports = Item = mongoose.model('items', ItemSchema)