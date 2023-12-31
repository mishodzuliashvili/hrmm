"use client";
import { useRef, useState } from "react";
import { MultipleChoiseQuestion } from "./MultipleChoiseQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";
import { WritingQuestion } from "./WritingQuestion";

export const Question = ({
  question,
  scrollOn,
  setRightScore,
  setWrongScore,
  setWrongQuestions,
}: {
  question: Question;
  scrollOn: boolean;
  setRightScore: any;
  setWrongScore: any;
  setWrongQuestions: any;
}) => {
  const questionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    questionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleClick = (answer: string) => {
    if (answer === question.answer) {
      setRightScore((prev: number) => prev + 1);
      if (scrollOn) {
        requestAnimationFrame(() => {
          questionRef.current?.nextElementSibling?.scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    } else {
      setWrongScore((prev: number) => prev + 1);
      setWrongQuestions((prev: Question[]) => [...prev, question]);
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
          <TrueFalseQuestion
            handleScroll={handleScroll}
            handleClick={handleClick}
            question={question}
          />
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
