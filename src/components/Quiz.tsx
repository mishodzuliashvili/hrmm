"use client";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import Button from "./Button";
import useLocalStorage from "@/hooks/useLocalStorage";

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [score, setScore] = useState<number>(0);
  const [scrollOn, setScrollOn] = useLocalStorage("scroll", false); //

  const handleSelection = () => {
    // const selectedText = window.getSelection()?.toString();
    // console.log(selectedText);
  };

  return (
    <div className="flex">
      <div
        className="flex flex-col gap-4 max-w-[75ch] pb-5"
        onMouseUp={handleSelection}
      >
        {questions.map((question) => {
          return (
            <Question
              scrollOn={scrollOn}
              setScore={setScore}
              question={question}
              key={question.key ? question.key : question.questionNumber}
            />
          );
        })}
      </div>
      <div className="sticky top-0 self-start flex gap-3 p-5">
        {/* here i want to add score, timer and buttons for scrool and translator */}
        <Button disabled={true} onClick={() => {}}>
          Score: {score} / {questions.length}
        </Button>
        {/* button to on scrool behaviour */}
        <Button onClick={() => setScrollOn((prev: any) => !prev)}>
          {scrollOn ? "Scroll On" : "Scroll Off"}
        </Button>
        <Button onClick={() => window.scrollTo(0, 0)}>Scroll Top</Button>
      </div>
    </div>
  );
};

export default Quiz;
