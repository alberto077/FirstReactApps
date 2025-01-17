import { useEffect, useState } from 'react'

const Header = ({title, instructions, prompt}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="instructions">{instructions}</p>
      <p>{prompt}</p>
    </div>
  );
};

const Scoreboard = ({playerScore, computerScore, winner}) =>{

  return (
    <div id="scoreboard">
      <p>Player Score: <span id="player-score">{playerScore} {winner === "Player" ? "Winner!" : ""}</span></p>
      <p>Computer Score: <span id="computer-score">{computerScore} {winner === "Computer" ? "Winner!" : ""}</span></p>
      
    </div>
  );
};

const Choices = ({choices, onPlayerChoice}) => {

  return (
    <div className="choices">
      {choices.map((choice, index)=> (
      <button key ={index} onClick= {() => onPlayerChoice(choice)}> {choice.name} {choice.icon}</button>
      ))}
    </div>
  );
};

const Result = ({result}) => {
  if(!result){
    return <div id="result"><h2>No Result yet!</h2></div>
  }
  return (
  <div id="result">

    <p>{result.player}</p>
    <p>{result.computer}</p>
    <h2>{result.outcome}</h2>
  </div>
  );
};

const Reset = ({reset}) => {
    return (
        <div>
            <button id="reset" onClick={() => reset()}>Reset Game</button> 
        </div>   
    );
};



const RockPaperScissors = () => {
  const [result, setResult] = useState(null);
  const[playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState.apply(null);

  const choices = [
    { name: 'Rock', icon: '✊ ' },
    { name: 'Paper', icon: '✋ ' },
    { name: 'Scissors', icon: '✌ ' },
    ];

  
  const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
  
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner("Tie");
    return "It's a tie!";
    }
    if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
    setPlayerScore(playerScore + 1);
    setWinner("Player");
    return "You win!";
    }
    setComputerScore(computerScore + 1);
    setWinner("Computer");
   
    return "Computer wins!";
    };
  
    const handlePlayerChoice = (playerChoice) => {
        const computerChoice = getComputerChoice();
        const gameResult = determineWinner (playerChoice.name, computerChoice)
        console.log(`Player chose: ${playerChoice.name}`);
        console.log(`Computer chose ${computerChoice}`);
        setResult({
            player: `Player chose: ${playerChoice.name}`,
            computer: `Computer chose ${computerChoice}`,
            outcome: gameResult
      
        });

    };

    const resetGame = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setWinner('');
        setResult('');
    };



  return (
    <div>
      <Header 
        title = "Rock Paper Scissors Game"
        instructions = "Choose Rock, Paper, or Scissors to play against the computer!"
        prompt= "May the odds be ever in your favor!"
      />

      <Scoreboard winner = {winner}
        playerScore = {playerScore}
        computerScore = {computerScore}
       />

      <Choices 
        choices = {choices} onPlayerChoice = {handlePlayerChoice}
      />
      <Result result = {result} />
      <Reset reset = {resetGame}/>


    </div>
    );
 };
 export default RockPaperScissors;