var express = require('express-streamline');
var path = require('path');
var logger = require('morgan');

var middleware = function (req, res, _) {
    res.send(req.app.route + '\n' + req.originalUrl + '\n');
};

var subapp = express();
subapp.use(logger('dev'));
subapp.use('/', middleware);

var app = express();
app.use('/subapp', subapp);

module.exports = app;
