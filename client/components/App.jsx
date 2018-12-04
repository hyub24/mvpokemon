import React from 'react';
import Boulder from './Boulder.jsx';
import Cerulean from './Cerulean.jsx';
import Vermilion from './Vermilion.jsx';
import WildPokemon from './WildPokemon.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      badge: 0,
      pokemon: [],
      score: 0
    }
    this.badge = this.badge.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
  }

  badge(newScore) {
    this.setState({
      badge: this.state.badge + 1
    })
    if(newScore) {
      this.setState({
        score: this.state.score + newScore
      })
    }
  }
  addPokemon(pokemon) {
    let pokeArray = this.state.pokemon;
    pokeArray.push(pokemon);
    this.setState({
      pokemon: pokeArray
    });
  }

  render() {
    let gym = [
      <WildPokemon badge={this.badge} addPokemon={this.addPokemon} number={1} />,
      <Boulder badge={this.badge} />, 
      <WildPokemon badge={this.badge} addPokemon={this.addPokemon} number={2} />,
      <Cerulean badge={this.badge} />, 
      <WildPokemon badge={this.badge} addPokemon={this.addPokemon} number={3} />,
      <Vermilion badge={this.badge} />,
      <WildPokemon badge={this.badge} addPokemon={this.addPokemon} number={4} />
    ];
    let pokemon;
    let header;
    if(this.state.pokemon.length) {
      header = <h4>Your Pokemon:</h4>; 
      pokemon = this.state.pokemon.map(pokemon => {
        return <img src={pokemon.pic} key={pokemon.name} className="caught" />;
      })
    }

    return (
      <div>
        <h3>Total Score: {this.state.score}</h3>
        {header}
        {pokemon}
        {gym[this.state.badge]}
      </div>
    )
  }
}

export default App;