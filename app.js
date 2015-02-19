var express = require('express');
var path = require('path');
var logger = require('morgan');

var routes = express.Router();
routes.get('/', function (req, res, _) {
    res.send(req.app.mountpath + '\n' + req.baseUrl + '\n');
});

var subapp = express();
subapp.use(logger('dev'));
subapp.use('/', routes);

var app = express();
app.use('/subapp', subapp);

module.exports = app;
