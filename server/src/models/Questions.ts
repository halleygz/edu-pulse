import mongoose from "mongoose";
import { IQuestion } from "../types/modelTypes/QuestionModel";

interface IQuestionModel extends IQuestion, mongoose.Document {}

const questionSchema = new mongoose.Schema<IQuestionModel>({
  subject: {
    type: String,
    required: true,
  },
  question_text: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  subtopic: {
    type: String,
    required: true,
  },
  answer_options: {
    A: {
      type: String,
      required: true,
    },
    B: {
      type: String,
      required: true,
    },
    C: {
      type: String,
      required: true,
    },
    D: {
      type: String,
      required: true,
    },
  },
  correct_option: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
  },
  expected_response_time: {
    type: Number,
    required: true,
  },
  normalized_response_time: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model<IQuestionModel>("Question", questionSchema);

export default Question;