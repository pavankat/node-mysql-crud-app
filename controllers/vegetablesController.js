var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

router.get('/', function(req,res) {

	var query = "SELECT * FROM vegetables";

	connection.query(query, function(err, veges) {

		res.render('index', {
			vegetables: veges,
		});

	});
});

//buying a coupon
/*
curl -d '{"vege_name": "potato"}' -H "Content-Type: application/json" -X POST http://localhost:3000/vegetables/create
*/
router.post('/create', function(req,res) {

	console.log(req.body);

	var query = "INSERT INTO vegetables (vege_name) VALUES (?)"

	connection.query(query, [ req.body.vege_name ], function(err, response) {
		res.redirect('/vegetables')
	});

});

module.exports = router;
