"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import ShowResult from './ShowResult';

interface Question {
  _id: string;
  question_text: string;
  answer_options: Record<string, string>;
  correct_option: string;
  explanation: string;
  subject?: string;
  topic?: string;
  subtopic?: string;
  intensity?: number;
  expected_response_time?: number;
  normalized_response_time?: number;
}

const Quiz: React.FC<{ onReview: () => void }> = ({ onReview }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: string; selectedOption: string }[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams()
  const index = Number(searchParams.get("index"))
  console.log(typeof index)
  useEffect(() => {
    const loadQuestionsFromLocalStorage = () => {
      const storedData = localStorage.getItem('user-plans');
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          
          // Access the nested questions array
          const questions = parsedData[index]?.questions || [];
          console.log(questions)
          
          if (questions.length > 0) {
            setQuestions(questions);
          } else {
            console.error("No questions found in the 'user-plans'.");
          }
        } catch (error) {
          console.error("Error parsing 'user-plans' from localStorage:", error);
        }
      } else {
        console.error("'user-plans' not found in localStorage.");
      }
    };
  
    loadQuestionsFromLocalStorage();
  }, []);
  

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return; // Require selection before moving on

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: questions[currentQuestion]._id, selectedOption },
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(userAnswers[currentQuestion - 1]?.selectedOption || null);
    }
  };

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setQuizFinished(false);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleReviewResult = () => {
    const userAnswersQuery = encodeURIComponent(JSON.stringify(userAnswers));
    router.push(`/review-result?answers=${userAnswersQuery}`);
    onReview();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        handleNextQuestion();
      } else if (e.key === 'ArrowUp') {
        handlePreviousQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestion, selectedOption]);

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const question = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  const totalQuestions = questions.length;

  const calculateScore = () => {
    return userAnswers.filter(ans => ans.selectedOption === questions.find(q => q._id === ans.questionId)?.correct_option).length;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-6 text-custom-green-dark">Biology Assessment</h1>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        <div className="flex-1 mb-6 md:mb-0">
          {/* Display current question number and total questions */}
          <div className="mb-4 text-lg text-gray-700">
            Question {questionNumber} of {totalQuestions}
          </div>
          <p className="text-xl font-semibold mb-4">{question.question_text}</p>
        </div>
        <div className="flex-1 space-y-2">
          {Object.entries(question.answer_options).map(([key, option]) => (
            <button
              key={key}
              onClick={() => handleOptionClick(key)}
              className={`w-full px-4 py-2 text-left border rounded-md ${
                selectedOption === key
                  ? 'bg-custom-green-dark text-white'
                  : 'bg-white text-gray-800'
              } border-custom-green-dark hover:bg-custom-green-dark hover:text-white transition-colors duration-300`}
            >
              {option as string}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-custom-green-dark text-white rounded-md shadow-md hover:bg-custom-green transition-colors duration-300 flex items-center justify-center"
        >
          <FaArrowLeft />
          <span className="ml-2">Previous Question</span>
        </button>
        {quizFinished ? (
          <button
            onClick={handleReviewResult}
            className="px-4 py-2 bg-custom-green-dark text-white rounded-md shadow-md hover:bg-custom-green transition-colors duration-300"
          >
            Show Results
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="px-4 py-2 bg-custom-green-dark text-white rounded-md shadow-md hover:bg-custom-green transition-colors duration-300 flex items-center justify-center"
          >
            <span className="mr-2">Next Question</span>
            <FaArrowRight />
          </button>
        )}
      </div>
      {showResult && (
        <ShowResult
          score={calculateScore()}
          onClose={handleStartOver}
          onReview={handleReviewResult}
        />
      )}
    </div>
  );
};

export default Quiz;
