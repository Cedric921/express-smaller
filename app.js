const express = require('express');

const app = express();

// routes
const publicRoutes = require('./routes/public.route');

//views engine config
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use((req, res, next) => {
	console.log('un middleware');
	next();
});

app.use((req, res, next) => {
	console.log('un deuxieme middleware');
	next();
});

// main app

app.use(publicRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
