"use client";
import { CHAPTERS } from "@/assets/data";
import { Question } from "@/components/Question";
import Link from "next/link";
import { useState } from "react";

export default function Random30() {
  const [questions, setQuestions] = useState<Question[]>(
    shuffle(CHAPTERS.map((chapter) => chapter.questions).flat()).slice(0, 30)
  );

  return (
    <div className="flex flex-col gap-4 p-5">
      <div className=" flex justify-between items-center sticky top-0 bg-[rgb(31,31,31)] p-2 border-b-gray-700 border-b">
        <h1 className="text-3xl font-bold">Random 30 Questions</h1>
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
          >
            Home
          </Link>
          <button
            onClick={() => {
              setQuestions(() => [
                ...shuffle(
                  CHAPTERS.map((chapter) => chapter.questions).flat()
                ).slice(0, 30),
              ]);
            }}
            className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
          >
            Other Random 30
          </button>
        </div>
      </div>
      {/* questions */}
      <div className="flex flex-col gap-4 max-w-[75ch]">
        {questions.map((question) => {
          return <Question question={question} key={question.questionNumber} />;
        })}
      </div>
    </div>
  );
}

function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return [...array];
}
