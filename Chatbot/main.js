var apiai = require('apiai');
 
var app = apiai("25eaddb9c2694b73877325c13b7fdc9b");
 
var request = app.textRequest('hi', {
    sessionId: '1234232'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();