"use client";

import { useState } from "react";

export const WritingQuestion = ({
  question,
}: {
  question: Question;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <div>
      <div className="flex flex-col gap-3 items-start py-2">
        <div
            onClick={() => setSelectedOption("more")}
            className="bg-transparent border border-gray-700 p-3 cursor-pointer hover:border-gray-500 duration-300"
          >
            <span>Show Answer </span>
          </div>
      </div>
      <div className="flex flex-col items-start">
        {/* show answer */}
        {selectedOption !== undefined && (
          <div className="flex flex-col gap-3 items-start py-2">
            <div className="border border-gray-700 p-3 rounded-lg">
              <span>Answer: </span>
              <span>{question.answer}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
