var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
	res.render('fucks.ejs');
});

app.get('/fallinlovewith/:thing', function(req,res){
	var thing = req.params.thing;
	res.render('love.ejs', {thing: thing});
});



app.listen(port, function(err, res){
	if (err){
		console.log("Error happened");
	} else {
		console.log('Server Started');
	}

});