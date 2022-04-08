let request = require('request');
let async = require('async');

let count = 0;

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

function repeat() {

async.forEach(array, (item, cb) => {

var headers = {
    'authority': 'api.company-target.com',
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