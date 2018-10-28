const express = require('express');
const router = express.Router();

// @route GET api/sizes/test
// @desc Tests sizes route
// @access Public

const Size = require('../../models/Size');

router.get('/test', (req, res) => res.json({ msg: 'Sizes Works' }));

router.get('/all', (req, res) => {
	Size.find()
		.then(sizes => res.json(sizes))
		.catch(err => res.status(404).json({ nosizesfound: 'No sizes found' }));
});

router.get('/:id', (req, res) => {
	Size.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err =>
			res.status(404).json({ nosizesfound: 'No sizes found with that ID' })
		);
});

module.exports = router;
