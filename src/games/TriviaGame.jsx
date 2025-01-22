import React, { useState, useEffect } from "react";

const TriviaGame = () => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false)
    const [score, SetScore] = useState(0);

    useEffect(() => {
        // fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        fetch(`/FirstReactApps/questions.json?timestamp=${new Date().getTime()}`, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => setQuestions(data.results))
        .catch(() => console.error("Failed to fetch questions"));
    }, []);

    if (questions.length === 0) {
        return <h2>Loading questions...</h2>
    }

    console.log([...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]);
    const choices = [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer].sort(() => Math.random() - 0.5);

    const handleAnswer = (choice) => {
        console.log(choice);
        if (choice === questions[currentQuestionIndex].correct_answer){
            SetScore(score => {
               const newScore = score +1;
                return newScore;
            });
        }
        if (currentQuestionIndex < questions.length -1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else {
            setIsComplete(true);
        }
    };

    if (isComplete){
        return (
        <div>
        <h1>Complete</h1>
        <h2>Score: {score}/{questions.length}</h2>
        </div>
        )

    }
  return (
    <div>
        <h1>Trivia Game</h1>
        <h2>{questions[currentQuestionIndex].question}</h2>
       
       {choices.map((choice, index) => (
        <button key = {index} onClick = {() => handleAnswer(choice)}>{choice}</button>
       ))}
    </div>
  );
};

export default TriviaGame;