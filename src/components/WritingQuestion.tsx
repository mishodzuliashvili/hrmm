"use client";

import { useState } from "react";
import Button from "./Button";

export const WritingQuestion = ({ question }: { question: Question }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <div>
      <div className="flex flex-col gap-3 items-start py-2">
        <Button onClick={() => setSelectedOption("more")}>Show Answer</Button>
      </div>
      <div className="flex flex-col items-start">
        {/* show answer */}
        {selectedOption !== undefined && (
          <div className="flex flex-col gap-3 items-start py-2">
            <div className="border border-light-secondary dark:order-secondary p-3">
              <span>Answer: </span>
              <span>{question.answer}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
