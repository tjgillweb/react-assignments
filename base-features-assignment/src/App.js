import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "TJ"
  };

  changeStateHandler = () => {
    this.setState({
      username: "Taranjot"
    })
  }
  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    const inputStyle= {
      border: '2px solid #ccc',
      padding: '10px'
    };
    return (
      <div className="App">
          <UserInput name={this.state.username} changed={this.changeNameHandler} />
          <UserOutput 
            name = {this.state.username}
            click= {this.changeStateHandler}
          />
          <button style={inputStyle}>Styled Button!</button>
       
      </div>
    );
  }
}

export default App;
