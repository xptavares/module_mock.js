var request = require('request');
var rotas = [require('./itinerarios/rota1.json'), require('./itinerarios/rota2.json')];
var i = 0;
var j = 0;

var callback = function(error, response, body) {
	if(error) {
		console.log(error);
	} else {
		i++;
		if(i < rotas[j].length && j < rotas.length){
			setTimeout(controle, 500);
		} else if(j < rotas.length) {
			i = 0;
			j++;
			setTimeout(controle, 500);
			console.log('mudou de arquivo de rota');
		}
	}
} 

var controle = function() {
	var options = {
		uri: 'http://localhost:3000/itinerario_realizados',
	 	method: 'POST',
	 	form: {
	 		'authenticity_token': '09pnVsVNpbwUl765ni+owsy4L4PrKV1XW4cEF53u9MI=',
	 		'itinerario_realizado[latitude]': rotas[j][i].latitude,
	 		'itinerario_realizado[longitude]': rotas[j][i].longitude,
	 		'itinerario_realizado[date]': new Date(),
	 		'itinerario_realizado[viagem_id]': (j + 1)
		}
	}
	request(options, callback);
	console.log(options);
}

setTimeout(controle, 500);