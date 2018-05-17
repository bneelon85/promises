var rp = require('request-promise');


var urls = [
  'http://oakmac.com',
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

//var promiseArray = []

var p1 = rp(urls[0]);
var p2 = rp(urls[1]);
var p3 = rp(urls[2]);
var p4 = rp(urls[3]);
var p5 = rp(urls[4]);

Promise.all([p1,p2,p3,p4,p5])
    .then(function (responses) {
        console.log(responses[0]);
        console.log(responses[1]);
        console.log(responses[2]);
        console.log(responses[3]);
        console.log(responses[4]);
    });