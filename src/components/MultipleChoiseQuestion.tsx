"use client";

import { useState } from "react";
import Button from "./Button";

export const MultipleChoiseQuestion = ({
  question,
  handleClick,
  handleScroll,
}: {
  question: Question;
  handleClick: any;
  handleScroll: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  if (question.options === undefined) {
    return "err";
  }

  return (
    <div>
      <div className="flex flex-col gap-3 items-start py-2">
        {Object.keys(question.options).map((key) => (
          <Button
            disabled={!!selectedOption}
            onClick={() => {
              setSelectedOption(key);
              handleClick(key);
            }}
            key={question.questionNumber + key}
          >
            <span>{key + ")"} </span>
            <span>{(question.options as any)[key]}</span>
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-start">
        {selectedOption === question.answer && (
          <div className="border border-[#00cc00] rounded-lg text-[#00cc00] p-3">
            <span>{selectedOption} is Correct</span>
          </div>
        )}
        {selectedOption !== question.answer && selectedOption !== undefined && (
          <div className="border border-[#cc0000] rounded-lg text-[#cc0000] p-3">
            <span>{selectedOption} is Incorrect</span>
          </div>
        )}
        {/* show explanation and answer */}
        {selectedOption !== undefined && (
          <div className="flex flex-col gap-3 items-start py-2">
            <div className="flex gap-3">
              <div className="border border-light-secondary dark:border-secondary rounded-lg p-3">
                <span>Correct Answer: </span>
                <span>{question.answer}</span>
              </div>
              <Button
                onClick={() => {
                  handleScroll();
                }}
              >
                Scroll to Next
              </Button>
            </div>
            <div className="border border-light-secondary rounded-lg dark:border-secondary p-3">
              <span>Explanation: </span>
              <span>{question.explanation}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
