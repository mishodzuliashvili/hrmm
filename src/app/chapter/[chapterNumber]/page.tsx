"use client";
import { CHAPTERS } from "@/assets/data";
import { Question } from "@/components/Question";
import Link from "next/link";
import { useState } from "react";

export default function Chapter({
  params: { chapterNumber },
}: {
  params: { chapterNumber: string };
}) {
  const chapter: Chapter | undefined = CHAPTERS.find(
    (chapter) => chapter.chapterNumber === parseInt(chapterNumber)
  );
  const [questions, setQuestions] = useState<Question[]>(
    chapter ? chapter.questions : []
  );
  const [score, setScore] = useState<number>(0);

  if (!chapter) {
    return <div>Chapter not found</div>;
  }
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className=" flex justify-between items-center sticky top-0 bg-[rgb(31,31,31)] p-2 border-b-gray-700 border-b">
        <h1 className="text-3xl font-bold">
          N{chapter.chapterNumber + " " + chapter.name}
        </h1>
        <div className="flex gap-4 items-center">
          <div className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300">
            Score: {score}
          </div>
          <Link
            href="/"
            className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
          >
            Home
          </Link>
          <button
            onClick={() => {
              setQuestions((prevQ) => [...shuffle(prevQ)]);
            }}
            className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
          >
            Shuffle
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* here i want to add buttons to filter for hard, easy and medium */}
        <button
          onClick={() =>
            setQuestions(() =>
              chapter.questions.sort(
                (a, b) => a.questionNumber - b.questionNumber
              )
            )
          }
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Show All
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Easy"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Easy
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Moder"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Medium
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Hard"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Hard
        </button>
        <button
          onClick={() => {
            setQuestions(() => [...shuffle(chapter.questions).slice(0, 10)]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          10 Random
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "true-false"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          True-False
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "writing"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Writing
        </button>
        <button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "multiple-choice"),
            ]);
          }}
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Writing
        </button>
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
