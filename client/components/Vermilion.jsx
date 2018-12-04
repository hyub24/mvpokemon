import React from 'react';

class Vermilion extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      heaviest: '',
      tallest: '',
      current: 0,
      score: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/vermilion')
      .then(response => response.json())
      .then((data) => {
        this.setState({ data });
        let heaviest;
        let heaviestCount;
        let tallest;
        let tallestCount;
        for(let i = 0; i<data.length; i++) {
          if(heaviestCount < data[i].weight || !heaviestCount) {
            heaviestCount = data[i].weight;
            heaviest = data[i].name;
          }
          if(tallestCount < data[i].height || !tallestCount) {
            tallestCount = data[i].height;
            tallest = data[i].name;
          }
        }
        this.setState({
          heaviest, tallest
        })
      }).then(()=> console.log(this.state))
      .catch(err => console.log(err));
  }

  handleClick() {
    let newCurrent = this.state.current + 1;
    let newScore;
    this.setState({
      current: newCurrent
    })
    if(this.state.current === 0 && event.target.name === this.state.heaviest) {
      newScore = this.state.score + 1;
      this.setState({
        score: newScore
      })
    } else if (this.state.current === 1 && event.target.name === this.state.tallest) {
      newScore = this.state.score + 1;
      this.setState({
        score: newScore
      })
    }
    if (this.state.current === 1) {
      if(newScore) this.props.badge(newScore);
      else this.props.badge(this.state.score);
    }
  }

  render() {
    let currentQuestion;
    if(this.state.current === 0) {
      currentQuestion = <h2>Which pokemon is the heaviest?</h2>;
    } else if(this.state.current === 1) {
      currentQuestion = <h2>Which pokemon is the tallest?</h2>;
    }
    return (
      <div>
        <h2>Welcome to the Vermilion City Gym!</h2>
        <h3>Score: {this.state.score}</h3>
        {this.state.data.map(pokemon => {
          return (<img src={pokemon.pic} name={pokemon.name} key={pokemon.name} onClick={this.handleClick} />)
        })}
        {currentQuestion}
      </div>
    )

  }
}

export default Vermilion;

        // {this.state.data.map(pokemon => <h3 key={pokemon.name}>{pokemon.name}</h3>)}