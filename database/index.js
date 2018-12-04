const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  database : 'mvpokemon',
  user     : 'root'
});

const db = {};

db.getTrivia = (callback) => {
  const query = 'select * from bouldertrivia';
  connection.query(query, (err, results) => {
    if (err) callback(err);
    else callback(null, results);
  })
}

db.getPics = (cb) => {
  const query = 'select * from ceruleanpics';
  connection.query(query, (err, results) => {
    if (err) cb(err);
    else cb(null, results);
  })
}

module.exports = db;