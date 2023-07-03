"use client";
import { CHAPTERS } from "@/assets/data";
import Button from "@/components/Button";
import Quiz from "@/components/Quiz";
import shuffle from "@/utils/shuffle";
import { useEffect, useState } from "react";

export default function Chapter({
  params: { chapterNumber },
}: {
  params: { chapterNumber: string };
}) {
  const chapter: Chapter | undefined = CHAPTERS.find(
    (chapter) => chapter.chapterNumber === parseInt(chapterNumber)
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    setNewQuestions(chapter?.questions ?? []);
  }, []);
  if (!chapter) {
    return <div>Chapter not found</div>;
  }
  const setNewQuestions = (newQuestions: Question[]) => {
    setQuestions(
      newQuestions.map((q) => ({
        ...q,
        key:
          chapter.chapterNumber +
          "-" +
          q.questionNumber +
          "-" +
          new Date().toISOString(),
      }))
    );
  };

  const filters = [
    {
      name: "Show All",
      onClick: () => {
        setNewQuestions(chapter.questions);
      },
    },
    {
      name: "Shuffle",
      onClick: () => {
        setNewQuestions(shuffle(questions));
      },
    },
    {
      name: "Easy",
      onClick: () => {
        setNewQuestions(
          chapter.questions.filter((q) => q.difficulty === "Easy")
        );
      },
    },
    {
      name: "Medium",
      onClick: () => {
        setNewQuestions(
          chapter.questions.filter((q) => q.difficulty === "Moderate")
        );
      },
    },
    {
      name: "Hard",
      onClick: () => {
        setNewQuestions(
          chapter.questions.filter((q) => q.difficulty === "Hard")
        );
      },
    },
    {
      name: "Random 10",
      onClick: () => {
        setNewQuestions(shuffle(chapter.questions).slice(0, 10));
      },
    },
    {
      name: "True/False",
      onClick: () => {
        setNewQuestions(
          chapter.questions.filter((q) => q.type === "true-false")
        );
      },
    },
    {
      name: "Multiple Choice",
      onClick: () => {
        setNewQuestions(
          chapter.questions.filter((q) => q.type === "multiple-choice")
        );
      },
    },
    {
      name: "Writing",
      onClick: () => {
        setNewQuestions(chapter.questions.filter((q) => q.type === "writing"));
      },
    },
    {
      name: "Random 10 + Multiple Choice",
      onClick: () => {
        setNewQuestions(
          shuffle(chapter.questions.filter((q) => q.type === "multiple-choice"))
            .slice(0, 10)
            .map((q) => ({ ...q }))
        );
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        N{chapter.chapterNumber + " " + chapter.name}
      </h1>

      <div className="flex items-center gap-3 flex-wrap">
        {filters.map((filter) => (
          <Button key={filter.name} onClick={filter.onClick}>
            {filter.name}
          </Button>
        ))}
      </div>
      <Quiz setNewQuestions={setNewQuestions} questions={questions} />
    </div>
  );
}
