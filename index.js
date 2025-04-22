const express = require('express');
const route = require('./routes/client/index.route');
const routeAdmin = require('./routes/admin/index.route');
const app = express();
require('dotenv').config();
const database = require('./config/database');
const port = process.env.PORT;

database.connect();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log('Port', port)
})
