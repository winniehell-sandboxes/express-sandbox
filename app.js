var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
var subapp = express();
app.use('/subapp', subapp);

// view engine setup
subapp.set('views', path.join(__dirname, 'views'));
subapp.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
subapp.use(logger('dev'));
subapp.use(bodyParser.json());
subapp.use(bodyParser.urlencoded({ extended: false }));
subapp.use(cookieParser());
subapp.use(express.static(path.join(__dirname, 'public')));

subapp.use('/', routes);

// catch 404 and forward to error handler
subapp.use(function(req, res, _) {
    var err = new Error('Not Found');
    err.status = 404;
});

// error handlers

// development error handler
// will print stacktrace
if (subapp.get('env') === 'development') {
    subapp.use(function(err, req, res, _) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
subapp.use(function(err, req, res, _) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
