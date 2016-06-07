//need to get ip address, language and software
//{"ipaddress":"73.216.58.200","language":"en-US","software":"X11; CrOS x86_64 7978.76.0"}

//reqexp beginning with ( and ending with )

var express = require('express');
var app = express();

var regexp = /\(([^)]+)\)/;

app.get('/', function(req, res){
   var ip = req.headers['x-forwarded-for'];
   var acceptedLanguage = req.headers['accept-language'];
   var language = acceptedLanguage.split(',');
   var software = req.headers['user-agent'];
   
   
   
   res.end('{"ipaddress":"' + ip + '","language":"' + language[0] + '","software":"' + software.match(regexp)[1] + '"}');
});









app.listen(process.env.PORT || 3000, function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});