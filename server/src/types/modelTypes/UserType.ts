import { User } from "../allTypes";

export interface IUser extends User {
    current_level: number;
    points: number;
    completed_questions: object[];
    avg_response_time: number;
    avg_intensity: number;
    plans: object[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IPlan {
    num_of_questions: number;
    question_ids: string[];
}