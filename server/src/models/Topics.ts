import mongoose from "mongoose";
import {
  ISubtopic,
  ITopic,
  ITopicDocument,
} from "../types/modelTypes/TopicTypes";

interface ISubtopicSchema extends ISubtopic {}
interface ITopicSchema extends ITopic {}
interface ITopicDocumentSchema extends ITopicDocument, Document {}

const SubtopicSchema = new mongoose.Schema<ISubtopicSchema>({
  name: {
    type: String,
    required: true,
  },
});

const TopicSchema = new mongoose.Schema<ITopicSchema>({
  name: {
    type: String,
    required: true,
  },
  subtopics: { type: [SubtopicSchema], required: true },
});

const TopicDocumentSchema = new mongoose.Schema<ITopicDocumentSchema>({
  name: {
    type: String,
    required: true,
  },
  topic: { type: [TopicSchema], required: true },
});

const Topic = mongoose.model<ITopicDocumentSchema>(
  "Topic",
  TopicDocumentSchema
);

export default Topic;
