const router = require('express').Router();

// controller
const publicController = require('../controllers/public.controller');

router
	.get('/', publicController.getHomePage)
	.get('/contact', publicController.getContactPage)
	.get('/about', publicController.getAboutPage);

module.exports = router;
