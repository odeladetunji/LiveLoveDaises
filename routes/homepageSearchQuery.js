var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('meet people module ran');
	console.log(req.baseUrl);
	var queryString = req.baseUrl;
    console.log(queryString.slice(21));
    var decodingQuery = decodeURIComponent(queryString.slice(21));
    var theSearchQuery = decodingQuery;
    res.cookie('theSearchQuery', theSearchQuery, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});
    res.render('firsthomepage');
});

module.exports = router;