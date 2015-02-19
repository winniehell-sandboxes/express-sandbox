var express = require('express-streamline');

var app = express();

// catch 404 and forward to error handler
app.use(function (req, res, _) {
    var err = new Error('I’m a teapot (with streamline)');
    err.status = 418;
    _(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, _) {
    res.status(err.status || 500);
    res.send('Error ' + err.status + ': ' + err.message);
});

module.exports = app;
