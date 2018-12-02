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

module.exports = db;