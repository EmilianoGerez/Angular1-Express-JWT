var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var validator = require('express-validator');
var cors = require('cors');


// Register models
var userModel = require('./server/models/user.server.model.js');
var counterModel = require('./server/models/counter.server.model.js');


// Mogoose DB
var configDB = require('./server/configs/db.server.config');
mongoose.connect(configDB.url, function (err) {
    if (err)
        console.log(err);
});

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());
app.use(cookieParser());
app.use("/client", express.static(__dirname + "/client"));
app.use("/client", express.static(__dirname + "/bower_components"));


// Routes middleware
// var routes = require('./routes/index.server.routes');
var users = require('./server/routes/users.server.routes.js');
var auth = require('./server/routes/auth.server.routes.js');


// app.use('/', routes);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
