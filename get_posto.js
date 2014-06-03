var request = require('request');
var fs = require('fs');

var options = {
	uri: 'http://maps.googleapis.com/maps/api/directions/json?origin=florianopolis,sc&destination=lages,sc&waypoints=chapeco,sc|criciuma,sc&sensor=false',
 	method: 'GET'
}

var callback = function(error, response, body) {
	if(error) {
		console.log(error);
	} else {
		var out = [];
		var info = JSON.parse(body);
		for (var i = 0; i < info.routes[0].legs.length; i++) {
			var leg = info.routes[0].legs[i];
			for (var j = 0; j < leg.steps.length; j++) {
				var step = leg.steps[j];
				out.push({
					"date": new Date(), 
					"latitude": step.start_location.lat,
					"longitude": step.start_location.lng
				});
			};
		};

		var outputFilename = './itinerarios/rota1.json';
		fs.writeFile(outputFilename, JSON.stringify(out, null, 4), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + outputFilename);
		    }
		}); 
	}
} 

request(options, callback);