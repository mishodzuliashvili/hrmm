import { MultipleChoiseQuestion } from "./MultipleChoiseQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";
import { WritingQuestion } from "./WritingQuestion";

export const Question = ({ question }: { question: Question }) => {
  return (
    <div>
      <h1 className="font-medium text-xl">
        {" "}
        {question.questionNumber + ". " + question.question}
      </h1>
      {/* {question */}
      <p className="text-gray-500">{question.difficulty}</p>
      <div>
        {question.type === "true-false" && (
          <TrueFalseQuestion question={question} />
        )}
        {question.type === "multiple-choice" && (
          <MultipleChoiseQuestion question={question} />
        )}
        {question.type === "writing" && <WritingQuestion question={question} />}
      </div>
    </div>
  );
};
