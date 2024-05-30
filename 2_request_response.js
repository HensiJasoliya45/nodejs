var http = require('http');
var server = http.createServer(function(req,res)
{
    console.log("I have recevied your request..");
});
server.listen(5000);