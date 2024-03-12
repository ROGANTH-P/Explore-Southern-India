import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['Berlin', 'Delhi', 'Paris', 'Rome'],
    correctAnswer: 'Delhi',
  },
  {
    question: 'I am a symbol of love',
    options: ['Taj mahal', 'Red fort', 'Gateway of India', 'Mahabalipuram'],
    correctAnswer: 'Taj mahal',
  },
  {
    question: 'Which is the traditional Dance of TamilNadu',
    options: ['Kathakali', 'Odissi', 'Mohiniyattam', 'Bharathanatyam'],
    correctAnswer: 'Bharathanatyam',
  },
];

function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <h2 style={{ color: 'violet' }} className="text-center">
        Let's check how much you understand's India
      </h2>
      <div className="flex flex-col items-center justify-center">
        {showScore ? (
          <div className="text-center">
            <h2
              className="text-2xl font-semibold  mb-2"
              style={{ color: 'blue' }}
            >
              Your Score: {score}/{questions.length}
            </h2>
            <button
              className="bg-blue-500  px-4 py-2 rounded"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="p-4 rounded-lg shadow-lg text-center">
            <h2
              className="font-semibold  mb-2 text-blue-200"
              style={{ color: 'blue' }}
            >
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p
              className="text-lg text-gray-800 mb-4"
              style={{ color: 'green' }}
            >
              {questions[currentQuestion].question}
            </p>
            <div className="options grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className=" px-4 py-2 rounded"
                  style={{ color: 'red' }}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz1;