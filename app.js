
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/admin' ,adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);