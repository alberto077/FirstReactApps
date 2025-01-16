import { useState } from 'react'
import './App.css'
import  RockPaperScissors from "./games/RockPaperScissors"
import HigherorLower from "./games/HigherorLower"

const GameSelector = ({onGameSelect}) => {
  return (
    <div>
      <h2>Select a Game</h2>
      <button onClick = {() => onGameSelect("RockPaperScissors")}>Rock-Paper-Scissors</button>
      <button onClick = {() => onGameSelect("Higher or Lower")}>Higher or Lower Guessing Game</button>
    </div>
  );
}

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  console.log(selectedGame);
  const renderGame = () => {
    switch(selectedGame){
      case "RockPaperScissors":
        return <RockPaperScissors />;
      case "Higher or Lower":
        return <HigherorLower />;
      default:
        return <p>Please select a game to start playing</p>;
      

    }
  };
  return (
    <div>
    <h1>My Mini Game Hub</h1>
    <hr />
    <GameSelector  onGameSelect = {setSelectedGame}/>
    {renderGame()}
    </div>
  );
}

 export default App;