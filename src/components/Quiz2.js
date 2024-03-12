import React, { useState } from 'react'; // Import the CSS file

const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hints, setHints] = useState([
    'I am the capital of India and one of the oldest continuously inhabited cities in the world. My historic landmarks include the Red Fort, India Gate, and Qutub Minar',
    'I am a famous historical fort located in Delhi, India. I am made of red sandstone and have a distinctive design. ',
    'I was built as a symbol of love and are considered one of the most beautiful buildings in the world',
    'I am a city in India, and I am known for my turmeric cultivation and textile manufacturing',
    'I am a vibrant city located in the southern part of India. Known as the "Manchester of South India"',
  ]);

  const questions = [
    {
      question: 'Do you know me?',
      answer: 'delhi',
    },
    {
      question: 'Can you able to find me?',
      answer: 'red fort',
    },
    {
      question: 'Guess me correctly',
      answer: 'Tajmahal',
    },
    {
      question: 'Do you know me?',
      answer: 'Erode',
    },
    {
      question: 'Find me?',
      answer: 'coimbatore',
    },
  ];

  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckAnswer = () => {
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    const userAnswerLower = userAnswer.toLowerCase();

    if (userAnswerLower === correctAnswer) {
      alert('Correct!');
      setShowAnswer(true);
    } else {
      alert('Incorrect. Try again.');
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-xl text-purple-600 mb-2" style={{ color: 'blue' }}>
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className="text-lg text-green-800 mb-4" style={{ color: 'green' }}>
        {hints[currentQuestion]}
      </p>
      <p className="text-lg text-blue-800 mb-4">
        {questions[currentQuestion].question}
      </p>
      <input
        type="text"
        className="form-control mb-2 bg-pink-100 rounded-lg p-2"
        placeholder="Enter your answer..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button
        className="bg-indigo-600 px-4 py-2 rounded-lg mr-2 hover:bg-indigo-700"
        onClick={handleCheckAnswer}
        style={{ color: 'red' }}
      >
        Check Answer
      </button>
      <button
        className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        onClick={handleNextQuestion}
        style={{ color: 'red' }}
      >
        Next Question
      </button>
      {!showAnswer && (
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
          onClick={handleShowAnswer}
          style={{ color: 'red' }}
        >
          Show Answer
        </button>
      )}
      {showAnswer && (
        <p className="text-lg text-red-800 mt-4">
          The correct answer is: {questions[currentQuestion].answer}
        </p>
      )}
    </div>
  );
};

export default Quiz2;
