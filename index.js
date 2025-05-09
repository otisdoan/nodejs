const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/client/index.route');
const routeAdmin = require('./routes/admin/index.route');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
require('dotenv').config();
const database = require('./config/database');
const port = process.env.PORT;
var methodOverride = require('method-override');
var path = require('path');

database.connect();

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use(bodyParser.urlencoded());

app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/public`));


app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log('Port', port)
})
