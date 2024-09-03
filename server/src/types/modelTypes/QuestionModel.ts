export interface IQuestion {
    subject: string;
    question_text: string;
    topic: string;
    subtopic: string;
    answer_options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correct_option: string;
    explanation: string;
    intensity: number;
    expected_response_time: number;
    normalized_response_time: number;
}