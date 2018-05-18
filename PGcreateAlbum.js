var prompt = require('prompt-promise');
var pgp = require('pg-promise')({});
var db = pgp({database: 'music', user: 'postgres'});
var res = [];

prompt('Album name? ')
.then(function albumName(val) {
  res.push(val);
  return prompt('Album year? ');
})
.then(function albumYear(val) {
  res.push(val);
  return prompt('Artist ID? ');
})
.then(function artistID(val) {
  res.push(val);  
  //console.log(res);
  return db.query('INSERT INTO album VALUES (default, $1)', [res[0]]);
})
.then(function(result) {
      console.log('Created Album with ID'+res[2]);
      prompt.done();
      pgp.end();
  })
.catch(function (err) {
  console.log('error:', err.stack);
  prompt.finish();
});