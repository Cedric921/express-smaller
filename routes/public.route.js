const router = require('express').Router();
const path = require('path');

const handlerView = (res, filename) => {
	res.sendFile(path.join(__dirname, '..', 'views', filename));
};

router
	.get('/', (req, res) => {
		handlerView(res, 'index.html');
		// res.sendFile(path.join(__dirname, 'views', 'index.html'));
	})
	.get('/contact', (req, res) => {
		handlerView(res, 'contact.html');
		// res.sendFile(path.join(__dirname, 'views', 'contact.html'));
	})
	.get('/about', (req, res) => {
		handlerView(res, 'about.html');
		// res.sendFile(path.join(__dirname, 'views', 'about.html'));
	});

module.exports = router;
