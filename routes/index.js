var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, _) {
    res.send(req.app.mountpath + '\n' + req.baseUrl + '\n');
});

module.exports = router;
