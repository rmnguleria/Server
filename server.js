var Queue = require('./Queue');
var express = require('express');
var app = express();

var queue = new Queue();

app.get('/motion', function (req, res) {
  queue.enqueue(req.query.q);
  console.log(req.query.q);
  res.send();
});

app.get('/getmotion',function(req,res){
	if(!queue.isEmpty()){
		var value = queue.dequeue();
		res.send(value);
	}
	else{
		res.send();
	}
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
