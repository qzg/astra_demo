var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session')
const CassandraStore = require('cassandra-store')
const {client} = require('./apis/utility.js')
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const options = {
    "table": "sessions",
    "client": client,
    "clientOptions": {
        //"contactPoints": [ "localhost" ],
        "keyspace": "blessings" //,
//        "queryOptions": {
//            "prepare": true
//        }
    }
}

app.use(session({secret:'DataStaxSecret',
										cookie: {maxAge: 60000},
                    store: new CassandraStore(options) }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
  console.log(err)
  console.log( "this came from the error handler")
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
