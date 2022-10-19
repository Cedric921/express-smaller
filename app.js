const app = require('express')();
const path = require('path');

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
