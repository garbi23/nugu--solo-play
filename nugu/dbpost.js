var querystring = require('querystring');
var http = require('http');
let dbpost = {}

dbpost.Postcode = function(codestring) {
  // Build the post string from an object
  var post_data = querystring.stringify({
        'soilwater' : codestring,
        'temp' : codestring,
        'humi' : codestring
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'http://15.164.91.18',
      port: '80',
      path: '/index.php',
      method: 'POST',
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });
  // post the data
  post_req.write(post_data);
  post_req.end();
}

module.exports = dbpost;
