"use client";
import { CHAPTERS } from "@/assets/data";
import Button from "@/components/Button";
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
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        N{chapter.chapterNumber + " " + chapter.name}
      </h1>

      <div className="flex items-center gap-3">
        {/* here i want to add buttons to filter for hard, easy and medium */}

        <Button
          onClick={() => {
            setQuestions((prevQ) => [...shuffle(prevQ)]);
          }}
        >
          Shuffle
        </Button>

        <Button
          onClick={() =>
            setQuestions(() =>
              chapter.questions.sort(
                (a, b) => a.questionNumber - b.questionNumber
              )
            )
          }
        >
          Show All
        </Button>

        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Easy"),
            ]);
          }}
        >
          Easy
        </Button>

        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Moder"),
            ]);
          }}
        >
          Medium
        </Button>

        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.difficulty === "Hard"),
            ]);
          }}
        >
          Hard
        </Button>

        <Button
          onClick={() => {
            setQuestions(() => [...shuffle(chapter.questions).slice(0, 10)]);
          }}
        >
          10 Random
        </Button>
        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "true-false"),
            ]);
          }}
        >
          True-False
        </Button>
        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "writing"),
            ]);
          }}
        >
          Writing
        </Button>
        <Button
          onClick={() => {
            setQuestions(() => [
              ...chapter.questions.filter((q) => q.type === "multiple-choice"),
            ]);
          }}
        >
          Multiple Choice
        </Button>
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
