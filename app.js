var request = require('request');
var pontos = require('./itinerarios/rota1.json');
var i = 0;

var options = {
	uri: 'http://localhost:3000/itinerario_realizados',
 	method: 'POST',
 	form: {
 		'authenticity_token': 'cUD4eU1UjBDADOId8Yx38LA4UFkB4mU/sXK/QjmSolw=',
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
		console.log(body);
		setTimeout(controle, 5000);
	}
} 

var controle = function() {
	console.log('novo ponto! latitude: ' + pontos[i].latitude + 'longitude:' + pontos[i].longitude);
	console.log('pontos.length: ' + pontos.length);
	request(options, callback);
	console.log('novo ponto, OK!');
	i++;
	if(i == pontos.length){i=0;}

}

setTimeout(controle, 5000);