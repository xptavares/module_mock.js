var request = require('request');
var rota = require('./itinerarios/rota2.json');
var i = 0;
var deviceAccessKey = 'b29997da5b4d4debaa709585a13671a3';

var callback = function(error, response, body) {
	if(error) {
		console.log(error);
	} else {
		i++;
		if(i < rota.length){
			setTimeout(controle, 5000);
		}
	}
} 

var controle = function() {
	var options = {
		uri: 'http://tago.io/device/data',
	 	method: 'POST',
		json: [{
	    	variable: 'latitude',
	     	value: rota[i].latitude,
	      	unit: 'C',
	     	type: 'number',
	     	time: current_date
    	}, {
	    	variable: 'longitude',
	     	value: rota[i].longitude,
	      	unit: 'C',
	     	type: 'number',
	     	time: current_date
    	}],
		strictSSL: false,
		headers: {
	       'Authorization': 'Token ' + deviceAccessKey
	   	}
	}
	request(options, callback);
	console.log(options);
}

setTimeout(controle, 5000);