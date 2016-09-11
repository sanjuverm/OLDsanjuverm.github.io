var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/aboutme', function(req, res, next){
  	res.render('aboutme', {title: 'Sanjna Verma'});
});

router.get('/read2', function(req, res, next){
  	res.render('read2', {title: 'Sanjna Verma'});
});

module.exports = router;
