import React from 'react';
import Question from './Question.jsx';

class Boulder extends React.Component {
  constructor() {
    super();
    this.state = {
      trivia: [],
      score: 0,
      current: 0
    }
    this.handleScore = this.handleScore.bind(this);
  }

  componentDidMount() {
    fetch('/bouldertrivia')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          trivia: data
        })
        console.log(this.state)
      })
      .catch((err) => console.log(err));
  }

  handleScore(result) {
    if(result === 'nice') {
      let newScore = this.state.score + 1;
      this.setState({
        score: newScore,
      });
    };
    let newCurrent = this.state.current + 1;
    this.setState({
      current: newCurrent,
    });
    console.log(this.state)
  }

  render() {
    const { trivia } = this.state;
    const { current } = this.state;
    let currentQuestion;
    if(trivia.length) {
      currentQuestion = <Question trivia={trivia[current]} key={trivia[current].id} handleScore={this.handleScore} />;
    }
    return (
      <div>
        <h2>Welcome to the Pewter City Gym!</h2>
        <h3>Score: {this.state.score}</h3>
        {currentQuestion}
      </div>
    )
  }
}

export default Boulder;

        // {trivia.map(ele => {
        //   return <Question trivia={ele} key={ele.id} handleScore={this.handleScore} />
        // })}
