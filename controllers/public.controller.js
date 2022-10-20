const path = require('path');

const handlerView = (res, filename) => {
	res.sendFile(path.join(__dirname, '..', 'views', filename));
};

exports.getHomePage = (req, res) => {
	handlerView(res, 'index.ejs');
};

exports.getContactPage = (req, res) => {
	handlerView(res, 'contact.ejs');
};

exports.getAboutPage = (req, res) => {
	handlerView(res, 'about.ejs');
};
