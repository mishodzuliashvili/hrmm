"use client";

import { useState } from "react";
import Button from "./Button";

export const TrueFalseQuestion = ({ question }: { question: Question }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <div>
      <div className="flex flex-col gap-3 items-start py-2">
        {["TRUE", "FALSE"].map((val) => (
          <Button
            onClick={() => setSelectedOption(val)}
            key={question.questionNumber + val}
          >
            {val}
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-start">
        {selectedOption === question.answer && (
          <div className="border border-[#00cc00] text-[#00cc00] p-3">
            <span>{selectedOption} is Correct</span>
          </div>
        )}
        {selectedOption !== question.answer && selectedOption !== undefined && (
          <div className="border border-[#cc0000] text-[#cc0000] p-3">
            <span>{selectedOption} is Incorrect</span>
          </div>
        )}
        {/* show explanation and answer */}
        {selectedOption !== undefined && (
          <div className="flex flex-col gap-3 items-start py-2">
            <div className="border border-light-secondary dark:order-secondary p-3">
              <span>Correct Answer: </span>
              <span>{question.answer}</span>
            </div>
            <div className="border border-light-secondary dark:order-secondary p-3">
              <span>Explanation: </span>
              <span>{question.explanation}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
