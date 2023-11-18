let request = require('request');
let async = require('async');

let count = 0;


function repeat() {

async.forEach(array, (item, cb) => {

var headers = {
    'authority': 'domain.com',
};

var options = {
    url: 'https://url?key=value',
    headers: headers
};


function callback(error, response, body) {
    if (!error && response.statusCode == 200) { 
            count++;
            console.log(count, body, response.statusCode);
            cb();
    }
    else{
    	console.log(error, response, body);
    }
}

request(options, callback);

}, (error, result) => {
	if(count == 300) {
		console.log('9000 completed')
	}
	else{
	 count++;
     console.log(count);
     repeat();	
	}
	
})
}
repeat();
