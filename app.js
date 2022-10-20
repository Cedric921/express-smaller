const app = require('express')();

// routes
const publicRoutes = require('./routes/public.route');

//views engine config
app.set('view engine', 'ejs');
app.set('views', 'views');

// main app

app.use(publicRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
