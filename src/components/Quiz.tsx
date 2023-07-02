import { Question } from "./Question";

const Quiz = ({ questions }: { questions: Question[] }) => {
  const handleSelection = () => {
    // const selectedText = window.getSelection()?.toString();
    // console.log(selectedText);
  };
  return (
    <div
      className="flex flex-col gap-4 max-w-[75ch]"
      onMouseUp={handleSelection}
    >
      {questions.map((question) => {
        return (
          <Question
            question={question}
            key={question.key ? question.key : question.questionNumber}
          />
        );
      })}
    </div>
  );
};

export default Quiz;
