"use client";
import { CHAPTERS } from "@/assets/data";
import Button from "@/components/Button";
import Quiz from "@/components/Quiz";
import shuffle from "@/utils/shuffle";
import { useEffect, useState } from "react";
const getRandom30 = (filterFunc?: (q: Question) => any) => {
  return shuffle(
    CHAPTERS.map((chapter) =>
      chapter.questions.filter(filterFunc ?? (() => true)).map((q) => ({
        ...q,
        chapterNumber: chapter.chapterNumber,
      }))
    ).flat()
  ).slice(0, 30);
};
export default function Random30() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const setNewQuestions = (newQuestions: Question[]) => {
    setQuestions(
      newQuestions.map((q) => ({
        ...q,
        key:
          q.chapterNumber +
          "-" +
          q.questionNumber +
          "-" +
          new Date().toISOString(),
      }))
    );
  };
  useEffect(() => {
    setNewQuestions(getRandom30());
  }, []);

  const filters = [
    {
      name: "Another Random 30",
      onClick: () => {
        setNewQuestions(getRandom30());
      },
    },
    {
      name: "Only Multiple Choice",
      onClick: () => {
        setNewQuestions(getRandom30((q) => q.type === "multiple-choice"));
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Random 30 Questions</h1>
      <div className="flex items-center gap-3 flex-wrap">
        {filters.map((filter) => (
          <Button key={filter.name} onClick={filter.onClick}>
            {filter.name}
          </Button>
        ))}
      </div>
      {/* questions */}
      <Quiz setNewQuestions={setNewQuestions} questions={questions} />
    </div>
  );
}
