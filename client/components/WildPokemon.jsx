import React from 'react';

class WildPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pic: '',
      caught: null,
      clicked: false
    }
    this.handleCatch = this.handleCatch.bind(this);
  }

  componentDidMount() {
    fetch(`/wildpokemon/${this.props.number}`)
      .then(result => result.json())
      .then(pokemon => this.setState(pokemon))
      .catch((err) => console.log(err));
  }

  handleCatch() {
    if(Math.random() > 0.5) {
      this.setState({
        caught: 'yes'
      })
      this.props.addPokemon(this.state);
    } else {
      this.setState({
        caught: 'no'
      })
    }
    this.setState({
      clicked: true
    })
  }

  render() {
    let button;
    let caught;
    if(this.state.caught === 'yes') {
      caught = <h2>{this.state.name} Has Been Caught!</h2>;
    } else if(this.state.caught === 'no') {
      caught = <h2>Oh No! {this.state.name} Has Ran Away.</h2>;
    }
    if(!this.state.clicked) {
      button = <button onClick={this.handleCatch}>Throw Pokeball</button>;
    } else {
      button = <button onClick={() => this.props.badge()}>Next Gym</button>;
    }
    return (
      <div>
        <h1>A Wild {this.state.name} Has Appeared!</h1>
        <img src={this.state.pic} />
        {button}
        {caught}
      </div>
    )
  }
}

export default WildPokemon;