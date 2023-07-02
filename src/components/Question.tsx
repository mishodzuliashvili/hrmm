"use client";
import { useRef, useState } from "react";
import { MultipleChoiseQuestion } from "./MultipleChoiseQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";
import { WritingQuestion } from "./WritingQuestion";

export const Question = ({
  question,
  setScore,
  scrollOn,
}: {
  question: Question;
  setScore: any;
  scrollOn: boolean;
}) => {
  const questionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    questionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClick = (answer: string) => {
    if (answer === question.answer) {
      setScore((prev: number) => prev + 1);
      if (scrollOn) {
        requestAnimationFrame(() => {
          questionRef.current?.nextElementSibling?.scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    }
  };
  return (
    <div ref={questionRef}>
      <h1 className="font-medium text-xl mt-5">
        {question.questionNumber}. {question.question}
      </h1>
      <p className="text-gray-500">{question.difficulty}</p>
      <div>
        {question.type === "true-false" && (
          <TrueFalseQuestion question={question} />
        )}
        {question.type === "multiple-choice" && (
          <MultipleChoiseQuestion
            handleScroll={handleScroll}
            handleClick={handleClick}
            question={question}
          />
        )}
        {question.type === "writing" && <WritingQuestion question={question} />}
      </div>
    </div>
  );
};
