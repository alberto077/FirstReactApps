const GameSelector = ({onGameSelect}) => {
    return (
      <div>
        <h2>Select a Game</h2>
        <button onClick = {() => onGameSelect("RockPaperScissors")}>Rock Paper Scissors</button>
        <button onClick = {() => onGameSelect("HigherorLower")}>Higher or Lower Guessing Game</button>
        <button onClick = {() => onGameSelect("Hangman")}>Hangman</button>


      </div>
    );
  }

  export default GameSelector;