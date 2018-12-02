import React from 'react';
import Boulder from './Boulder.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      badge: 0
    }
    this.badge = this.badge.bind(this);
  }

  badge() {
    this.setState({
      badge: this.state.badge +1
    })
  }

  render() {
    let gym = [<Boulder badge={this.badge}/>];

    return (
      <div>
        {gym[this.state.badge]}
      </div>
    )
  }
}

export default App;