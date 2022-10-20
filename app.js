const app = require('express')();

// routes
const publicRoutes = require('./routes/public.route');

// main app

app.use(publicRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
