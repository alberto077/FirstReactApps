import { useState } from 'react'
import './App.css'
import  RockPaperScissors from "./games/RockPaperScissors";
import HigherorLower from "./games/HigherorLower";
import GameSelector from './components/Gameselector';
import Scoreboard from './components/Scoreboard';
import Results from './components/Results';
import Hangman from './games/Hangman';
import TriviaGame from './games/TriviaGame';
const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const[playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState(null);

  const updateScores = (winner) => {
    if (winner === "Player"){
    setPlayerScore(playerScore + 1);
    } else if (winner === "Computer") {
    setComputerScore(computerScore + 1);
    }
  };
      

    
  
  return (
    <div>
    <h1>My Mini Game Hub</h1>
    <Scoreboard playerScore={playerScore}
    computerScore={computerScore}/>
    <Results result = {gameResult} />
    <hr />
    <GameSelector  onGameSelect = {setSelectedGame}/>
    {selectedGame === "RockPaperScissors" && <RockPaperScissors updateScores = {updateScores} onSetGameResult = {setGameResult}/>}
    {selectedGame === "HigherorLower" && <HigherorLower updateScores = {updateScores} onSetGameResult = {setGameResult}/>}
    {selectedGame === "Hangman" && <Hangman updateScores = {updateScores} onSetGameResult = {setGameResult} />}
    {selectedGame === "TriviaGame" && <TriviaGame />} 


    {!selectedGame && <p>Please select a game to start </p>}
    </div>
  );
}

 export default App;