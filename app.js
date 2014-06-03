var request = require('request');
var pontos = require('./itinerarios/rota1.json');
var i = 0;

var options = {
	uri: 'http://localhost:3000/itinerario_realizados',
 	method: 'POST',
 	form: {
 		'authenticity_token': '09pnVsVNpbwUl765ni+owsy4L4PrKV1XW4cEF53u9MI=',
 		'itinerario_realizado[latitude]': pontos[i].latitude,
 		'itinerario_realizado[longitude]': pontos[i].longitude,
 		'itinerario_realizado[date]': new Date(),
 		'itinerario_realizado[viagem_id]': 1
	}
}

var callback = function(error, response, body) {
	if(error) {
		console.log(error);
	} else {
		i++;
		if(i < pontos.length){
			setTimeout(controle, 500);
		}
	}
} 

var controle = function() {
	var options = {
		uri: 'http://localhost:3000/itinerario_realizados',
	 	method: 'POST',
	 	form: {
	 		'authenticity_token': '09pnVsVNpbwUl765ni+owsy4L4PrKV1XW4cEF53u9MI=',
	 		'itinerario_realizado[latitude]': pontos[i].latitude,
	 		'itinerario_realizado[longitude]': pontos[i].longitude,
	 		'itinerario_realizado[date]': new Date(),
	 		'itinerario_realizado[viagem_id]': 1
		}
	}
	request(options, callback);
	console.log(options);
}

setTimeout(controle, 500);