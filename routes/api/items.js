const express = require('express');
const router = express.Router();

// @route GET api/items/test
// @desc Tests items route
// @access Public

const Item = require('../../models/Item');

router.get('/test', (req, res) => res.json({ msg: 'Items Works' }));

router.get('/all', (req, res) => {
	Item.find()
		.then(items => res.json(items))
		.catch(err => res.status(404).json({ noitemsfound: 'No items found' }));
});

router.get('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err =>
			res.status(404).json({ noitemsfound: 'No items found with that ID' })
		);
});

module.exports = router;