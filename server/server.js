const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/bouldertrivia', (req, res) => {
  db.getTrivia((err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});