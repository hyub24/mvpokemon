const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/wildpokemon/:number', (req, res) => {
  let num = Number(req.params.number) * 40 - 40;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*40) + num}`)
    .then(response => {
      let pokemon = {};
      pokemon.name = response.data.name;
      pokemon.pic = response.data.sprites.front_shiny;
      res.send(pokemon);
    })
    .catch((err) => res.status(500).send(err));
})


app.get('/bouldertrivia', (req, res) => {
  // db.getTrivia((err, results) => {
  //   if (err) res.status(500).send(err);
  //   else res.send(results);
  // })
  res.send([{answer:'bind', question: 'what tm does brock give in red or blue version?'},{answer:5, question:'how many pokemon did brock have in gold or silver version?'},
    {answer:'false', question: 'true or false: is electric not very effective against rock?'}, {answer: 'harrison', question: "what is brock's last name?"},
    {answer: '661', question: 'how heavy is golem in pounds?'}]);
});

app.get('/cerulean', (req, res) => {
  // db.getPics((err, results) => {
  //   if (err) res.status(500).send(err);
  //   else res.send(results);
  // })
  res.send([{answer: 'squirtle', question: 'whos that pokemon', pic: 'http://oi44.tinypic.com/34hbf51.jpg'},
             {answer: 'gyarados', question: 'whos that pokemon', pic: 'https://images-na.ssl-images-amazon.com/images/I/51VhrgoyhdL._SY450_.jpg'},
             {answer: 'kingler', question: 'whos that pokemon', pic: 'https://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-099-Kingler.png'},
             {answer: 'magikarp', question: 'whos that pokemon', pic: 'https://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-129-Magikarp.png'},
             {answer: 'croconaw', question: 'whos that pokemon', pic: 'http://www.cubed3.com/media/2012/September/whodatpoke2-4.jpg'}]);
})

app.get('/vermilion', (req, res) => {
  const results = [];
  axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*50)}`)
    .then(response => {
      let pokemon = {};
      pokemon.name = response.data.name;
      pokemon.weight = response.data.weight;
      pokemon.height = response.data.height;
      pokemon.pic = response.data.sprites.front_shiny;
      results.push(pokemon);
    })
    .then(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*50) + 50}`)
        .then(response => {
          let pokemon = {};
          pokemon.name = response.data.name;
          pokemon.weight = response.data.weight;
          pokemon.height = response.data.height;
          pokemon.pic = response.data.sprites.front_shiny;
          results.push(pokemon);
        })
        .then(() => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*51) + 100}`)
            .then(response => {
              let pokemon = {};
              pokemon.name = response.data.name;
              pokemon.weight = response.data.weight;
              pokemon.height = response.data.height;
              pokemon.pic = response.data.sprites.front_shiny;
              results.push(pokemon);
            })
            .then(() => res.send(results))
        })
    })
    .catch(error => res.status(500).send(error));
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});