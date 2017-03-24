var production = (process.env.NODE_ENV === 'production');
var express = require('express');
var swagger = require('swagger-express');
var cors = require('cors')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var menuItems = require('./routes/menuitems');
var menuCategories = require('./routes/menucategories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.get('/api/menuitems', menuItems.findAll);
app.get('/api/menuitems/:id', menuItems.find);
app.post('/api/menuitems', menuItems.create);
app.put('/api/menuitems/:id', menuItems.update);
app.delete('/api/menuitems/:id', menuItems.destroy);

app.get('/api/menucategories', menuCategories.findAll);
app.get('/api/menucategories/:id', menuCategories.find);
app.post('/api/menucategories', menuCategories.create);
app.put('/api/menucategories/:id', menuCategories.update);
app.delete('/api/menucategories/:id', menuCategories.destroy);

app.use(swagger.init(app, {
  apiVersion: '1.0',
  swaggerVersion: '1.0',
  swaggerURL: '/swagger',
  swaggerJSON: '/api-docs.json',
  swaggerUI: './public/swagger/',
  basePath: production ? 'https://warm-plateau-49175.herokuapp.com' : 'http://localhost:3000',
  info: {
    title: 'swagger-express sample app',
    description: 'Swagger + Express = {swagger-express}'
  },
  apis: ['./routes/menuitems.js', './routes/menucategories.js'],
  middleware: function(req, res) {}
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
