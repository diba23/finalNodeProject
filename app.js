require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const DatabaseManager = require('./src/core/database/databaseManager');
const usersRouter = require('./src/module/user/router/users');
const pollRouter = require('./src/module/pollsList/router');

var app = express();
(async()=>{
  await DatabaseManager.haseAdminUser();
})()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/login', usersRouter);
app.use('/api/poll_list', pollRouter);

app.use(function(req, res, next){
  next(createError(404));
})

app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error')
})
module.exports = app;
