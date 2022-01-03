import './App.css';
import React from 'react';
import jiujitsuPositions from './default-starting-positons.json'
import Button from './Button.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: "",
      description: {
        offense: "",
        defense: ""
      }
    };
    
    this.generateStartingPosition = this.generateStartingPosition.bind(this)
  }

  generateStartingPosition() {
    let newPosition = jiujitsuPositions[Math.floor(Math.random()*jiujitsuPositions.length)];
    if(this.state.positionName === newPosition.positionName){
      while(this.state.positionName === newPosition.positionName){
        newPosition = jiujitsuPositions[Math.floor(Math.random()*jiujitsuPositions.length)];
      }
    }
    this.setState(newPosition);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>The "Wheel" of Positional Sparring</h1>
        </header>
  
        <div className="the-wheel">
          <h2>{this.state.positionName}</h2>
          <p className="offenseInstructions"> {this.state.description.offense !== "" && <strong>Offense:</strong>} {this.state.description.offense}</p>
          <p className="defenseInstructions"> {this.state.description.defense !== "" && <strong>Defense:</strong>} {this.state.description.defense}</p>
        </div>

        <Button onClick={this.generateStartingPosition} textContent={'Spin the Wheel'}></Button>
      </div>
    );
  }
}

export default App;
