"use client";

import { useState } from "react";

export const TrueFalseQuestion = ({
  question,
}: {
  question: Question;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <div>
      <div className="flex flex-col gap-3 items-start py-2">
        {["TRUE", "FALSE"].map((val) => (
          <div
            onClick={() => setSelectedOption(val)}
            key={question.questionNumber + val}
            className="bg-transparent border border-gray-700 p-3 cursor-pointer hover:border-gray-500 duration-300"
          >
            <span>{val} </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start">
        {selectedOption === question.answer && (
          <div className="border border-green-500 text-green-500 p-3 rounded-lg text-white">
            <span>{selectedOption} is Correct</span>
          </div>
        )}
        {selectedOption !== question.answer && selectedOption !== undefined && (
          <div className="border border-red-500 text-red-500 p-3 rounded-lg text-white">
            <span>{selectedOption} is Incorrect</span>
          </div>
        )}
        {/* show explanation and answer */}
        {selectedOption !== undefined && (
          <div className="flex flex-col gap-3 items-start py-2">
            <div className="border border-gray-700 p-3 rounded-lg">
              <span>Correct Answer: </span>
              <span>{question.answer}</span>
            </div>
            <div className="border border-gray-700 p-3 rounded-lg">
              <span>Explanation: </span>
              <span>{question.explanation}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
