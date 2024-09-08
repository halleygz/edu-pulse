"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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

interface UserAnswer {
    questionId: string;
    selectedOption: string;
}

interface ReviewResultProps {
    onClose: () => void;
}

const ReviewResult: React.FC<ReviewResultProps> = ({ onClose }) => {
    const searchParams = useSearchParams();
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/questions.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        
        fetchQuestions();
    }, []);

    useEffect(() => {
        const answersParam = searchParams.get('answers');
        if (answersParam) {
            try {
                const parsedAnswers = JSON.parse(decodeURIComponent(answersParam));
                setUserAnswers(parsedAnswers);
            } catch (error) {
                console.error('Error parsing user answers:', error);
            }
        }
    }, [searchParams]);

    return (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-6">
            <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full h-full overflow-y-auto p-6">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h1 className="text-2xl font-bold mb-6 text-custom-green-dark text-center">Review Your Answers</h1>
                {questions.length > 0 ? (
                    questions.map((question, index) => {
                        const userAnswer = userAnswers.find(ans => ans.questionId === question._id);

                        return (
                            <div key={question._id} className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">{index + 1}. {question.question_text}</h2>
                                <ul className="list-disc ml-6 mt-2">
                                    {Object.entries(question.answer_options).map(([key, option]) => (
                                        <li
                                            key={key}
                                            className={`text-lg ${
                                                key === question.correct_option
                                                    ? 'text-custom-green-dark font-bold'
                                                    : userAnswer?.selectedOption === key
                                                    ? 'text-red-500 font-semibold'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {key}: {option}
                                        </li>
                                    ))}
                                </ul>
                                {userAnswer?.selectedOption !== question.correct_option && (
                                    <p className="mt-2 text-sm text-gray-500">Explanation: {question.explanation}</p>
                                )}
                                <p className="mt-2 text-sm text-gray-600">Your Answer: {userAnswer?.selectedOption || 'No answer'}</p>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-700 text-center">Loading questions...</p>
                )}
            </div>
        </div>
    );
};

export default ReviewResult;
