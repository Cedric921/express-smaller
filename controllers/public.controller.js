exports.getHomePage = (req, res) => {
	res.render('index');
};

exports.getContactPage = (req, res) => {
	res.render('contact');
};

exports.getAboutPage = (req, res) => {
	res.render('about');
};
