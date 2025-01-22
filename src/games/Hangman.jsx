import { useState } from 'react'
const wordList = [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Grasshopper",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stork",
    "Swallow",
    "Swan",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Yak",
    "Zebra"
];

// Generates a random word from the word list.
const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
};

// Displays the keyboard for the player to make guesses.
const Keyboard = ({onBtnClick}) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <p className="hangman-keyboard">
        {buttons.map((letter)=>{
            return (
                <button className="hangman-button" onClick={onBtnClick} key={letter} value={letter}>{letter}</button>
            )
        })}
        </p>
        )
};


// Displays the current guessed word with correct letters filled in.
const GuessedWord =({guessedWord}) => {
    return (
            guessedWord.map((letter,index)=> {
            return (
                <span className="hangman-word" key={index}> {letter} </span>
            )
        })
    )
  };




// Main Hangman game component.
const Hangman = ({updateScores, onSetGameResult}) => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    const [guessedWord, setGuessedWord] = useState(new Array(secretWord.length).fill('-'));
    const [wrongCount, setWrongCount] = useState(0);

    // Resets the game to start over with a new word.
    const resetGame = () => {
        const newSecretWord = randomSecretWord();
        //set a new secretWord
        setSecretWord(newSecretWord);
        //set a new guessedWord
        setGuessedWord(new Array(newSecretWord.length).fill('-'))
        setWrongCount(0);



        
    };

    // Handles letter clicks and updates the guessed word or wrong count.
    const handleClick = (event) => {
        const guessedLetter = event.target.value.toLowerCase();
        console.log(guessedLetter);
        console.log(secretWord);
        console.log(guessedWord);        
        // // if (wrongCount >=5){
        // //     updateScores("Computer");
        // //     onSetGameResult(`You Lost! The word was ${secretWord}`);
        // //     return;
        // }
       
        if (guessedWord.join('') === secretWord){
            updateScores("Player");
            onSetGameResult("Congratulations, You Won!");
            return;
        }

        if (secretWord.includes(guessedLetter)) {
            // Complete the code here:
            
           
                // To update the state of the GuessedWord we have to update the existing array with an arrow function since the state shouldnt be modified directly
                // The idea of the arrow function is to delcare a constant variable (update) that will hold the updated array after proccessed by the map function and reutrned back to our setGuessedWord function to re-render with the new information
                // To transform this updated array with the correct values we need to loop through our currentArray uses the map fuction
                // Within this map function we will iterate through each char with the idea conditionally returning back a char
                // The checks will be done within the map function using an arrow function to hold the comparisions and returns
                // if the secretWord at that current index is equal to the guessedLetter we return the guessedLetter which will be placed at that index then move on
                // if it doesnt equal then the char at that index will be returned and wont change in the new update array
                // After the map fucntion is done looping and has populated the constat varible update with this new array we will return the update array which will be set as the array for guessedWord
                // This handles duplicate letters because the map function iterates though each index indivially and returns each time a match is or isnt found.
                setGuessedWord(currWord => {
                   const update = currWord.map((char, index) => {
                        if (secretWord[index] === guessedLetter){
                            return guessedLetter;
                        }
                        else {
                            return char;
                        }
                    });
                    return update;
                });


        } else if(wrongCount < 5){
            // To update the WrongCount we have to change the state by taking the currentWrongCount and updatig it with an arrow function since the state shouldnt be directly modified
            // Within this arrow function the idea is to declare a constant varible that will hold the newCount update and we return that back to set as the currentWrongCount
            // The newCount variable is set to equal the currentWrongCount incremented by one
            // Although if the new count has reached 5 the losing condition will be met which tells us that we need to  call back our fucntions in the Parent component and update the props sent to us with the Losing conditions
            // We then return to get out of updating the Count again since it is at its max, doing this will exit early and prevent the render from occuring
            //If the condition isnt met the newCount will be returned as the new State
            setWrongCount (currWrongCount => {
                const newCount = currWrongCount +1;
                console.log(newCount);
                if(newCount >= 5){
                    console.log("You Lost");
                    updateScores("Computer");
                    onSetGameResult(`You Lost! The word was ${secretWord}`);
                }
                return newCount;
            })
            // Track the number of wrong guesses:
            // - Increment the wrongCount state whenever the guessed letter is not in the secretWord.
            // - If the wrongCount reaches 5 or more, display a message indicating that the player has lost the game.
        }
    };

    return(
        <div>
            {/* Complete other components rendering */}
            <h1>Hangman Game</h1>
            <GuessedWord guessedWord = {guessedWord}/>
            {wrongCount === 5 && <h2>You Lost! The word was {secretWord}</h2>}
            {guessedWord.join('') === secretWord && <h2>Congratulations, You Won!</h2>}
            <br />
            <Keyboard onBtnClick={handleClick}/>
            <button onClick={resetGame}>Reset Game</button>

        </div>
    )
};


export default Hangman;
