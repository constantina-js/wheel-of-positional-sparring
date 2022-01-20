import './App.css';
import React from 'react';
import jiujitsuPositions from './default-starting-positons.json'
import Button from './Button.js';
import { bonusObjectives } from './constants'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: "",
      description: {
        offense: "",
        defense: ""
      },
      offenseBonus: "",
      defenseBonus: ""
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
    this.generateBonusObjective();
  }

  generateBonusObjective(){
    const offenseBonus = bonusObjectives[Math.floor(Math.random()*bonusObjectives.length)];
    const defenseBonus = bonusObjectives[Math.floor(Math.random()*bonusObjectives.length)];
    this.setState({
      offenseBonus,
      defenseBonus
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>The "Wheel" of Positional Sparring</h1>
          <section id="instructions">
            <ol>
              <li>Click the button to spin the wheel. </li>
              <li>You will then get a random sparring position with specific objectives for each partner.</li>
              <li> If at any point you want a new position, click the button again.</li>
            </ol>
          </section>
        </header>
        <div className="the-wheel">
          <h2>{this.state.positionName}</h2>
          <p className="offenseInstructions"> {this.state.description.offense !== "" && <strong>Offense:</strong>} {this.state.description.offense}</p>
          <p className="bonusOffense"> {this.state.offenseBonus !== "" && <em>Offense Bonus Objective: attempt submission via {this.state.offenseBonus}</em>}</p>
          <p className="defenseInstructions"> {this.state.description.defense !== "" && <strong>Defense:</strong>} {this.state.description.defense}</p>
          <p className="bonusDefense"> {this.state.defenseBonus !== "" && <em>Defense Bonus Objective: attempt submission via {this.state.defenseBonus}</em>}</p>
          <Button onClick={this.generateStartingPosition} textContent={'Spin the Wheel'}></Button>
        </div>
      </div>
    );
  }
}

export default App;
