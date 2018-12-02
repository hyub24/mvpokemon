import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super();
    this.state = {
      answer: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      answer: event.target.value
    })
  }

  handleSubmit() {
    if(this.state.answer === this.props.trivia.answer) {
      this.props.handleScore('nice');
    } else {
      this.props.handleScore();
    }
  }

  render() {
  return (
      <div>
        <div>{this.props.trivia.question}</div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Question;