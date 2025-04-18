const express = require('express');
const route = require('./routes/client/index.route');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

route(app);

app.listen(port, () => {
    console.log('Port', port)
})
