interface ISubtopic {
    name: string;
}

interface ITopic {
    name: string;
    subtopics: ISubtopic[];
}

interface ITopicDocument {
    name: string;
    topic: ITopic[];
}

export { ITopic, ISubtopic, ITopicDocument };