
const express = require('express');

const path = require('path');

const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin' ,adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).render('404');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);