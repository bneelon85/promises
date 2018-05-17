var rp = require('request-promise');
var fs = require('mz/fs');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var fname = 'fileout.txt';

rp(url)
    .then(function(response) {
      fs.writeFile(fname,response); 
    });

