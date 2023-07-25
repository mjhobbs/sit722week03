var express = require('express');
var router = express.Router();

const tableItemsJSON = require('./unitCodes.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 Week03 Project', unitCodeList: tableItemsJSON });
});

module.exports = router;
