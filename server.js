var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/src'));		//bring in the src/ directory
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.listen(3000, function () {
	console.log('Example app running on port 3000');
});