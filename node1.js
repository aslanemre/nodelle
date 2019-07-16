var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){


    if(req.url == '/'){
        
      fs.readFile('index.html', function(err, data) {
      res.write(data);

      });
  
    }
    
    if(req.url == '/admin.html'){
        
      fs.readFile('admin.html', function(err, data) {
      res.write(data);
      
      });
         

    }
   
         
    console.log(req.url);
});

server.listen(8080); 