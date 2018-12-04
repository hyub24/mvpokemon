import React from 'react';
import Question from './Question.jsx';

class Cerulean extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      current: 0,
      pics: []
    }
    this.handleScore = this.handleScore.bind(this);
  }

  componentDidMount() {
    fetch('/cerulean')
      .then(response => response.json())
      .then((pics) => {
        this.setState({ pics })
        console.log(this.state)
      })
      .catch(err => console.log(err));
  }

  handleScore(result) {
    let newScore;
    if(result === 'nice') {
      newScore = this.state.score + 1;
      this.setState({
        score: newScore,
      });
    };
    let newCurrent = this.state.current + 1;
    this.setState({
      current: newCurrent,
    });
    if(newCurrent === this.state.pics.length) {
      if(newScore) this.props.badge(newScore);
      else this.props.badge(this.state.score);
    }
    console.log(this.state)
  }

  render() {
    let currentQuestion;
    let currentPic;
    if(this.state.pics.length) {
      currentPic = <img src={this.state.pics[this.state.current].pic} />;
      currentQuestion = <Question trivia={this.state.pics[this.state.current]} handleScore={this.handleScore} />;
    }
    return (
      <div>
        <h2>Welcome to Cerulean City Gym!</h2> 
        <h3>Score: {this.state.score}</h3>
        {currentPic}
        {currentQuestion}
      </div>
    )
  }
}

export default Cerulean;