var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const connecToDataBase = require('./database/connect');

require("dotenv").config();

var indexRouter = require('./routes/index');
var esfihasRouter = require('./routes/esfihas');
var pedidosRouter = require('./routes/pedidos');
var ingredientesRouter = require('./routes/ingredientes')
var usuariosRouter = require('./routes/usuarios')


//const esfihas= require('./models/esfihas')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/esfihas', esfihasRouter);
app.use('/pedidos', pedidosRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/usuarios', usuariosRouter);

connecToDataBase();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
