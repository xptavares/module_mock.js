var request = require('request');
var rota = require('./itinerarios/rota2.json');
var i = 0;

var callback = function(error, response, body) {
	if(error) {
		console.log(error);
	} else {
		i++;
		if(i < rota.length){
			setTimeout(controle, 500);
		}
	}
} 

var controle = function() {
	var options = {
		uri: 'http://localhost:3000/itinerario_realizados',
	 	method: 'POST',
	 	form: {
	 		'authenticity_token': '8C2Vd9uxoWDeLdZFUAoRd61uVWbQ3Db6rOLAWt+ggk4=',
	 		'itinerario_realizado[latitude]': rota[i].latitude,
	 		'itinerario_realizado[longitude]': rota[i].longitude,
	 		'itinerario_realizado[date]': new Date(),
	 		'itinerario_realizado[viagem_id]': 4
		}
	}
	request(options, callback);
	console.log(options);
}

setTimeout(controle, 500);