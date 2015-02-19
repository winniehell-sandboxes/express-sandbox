var express = require('express');

var app = express();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('I’m a teapot');
    err.status = 418;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('Error ' + err.status + ': ' + err.message);
});

module.exports = app;
