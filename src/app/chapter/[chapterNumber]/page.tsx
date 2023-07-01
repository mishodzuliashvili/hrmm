import {CHAPTERS} from "@/assets/data"
import { MultipleChoiseQuestion } from "@/components/MultipleChoiseQuestion"
import { Question } from "@/components/Question"
import { TrueFalseQuestion } from "@/components/TrueFalseQuestion"
import { WritingQuestion } from "@/components/WritingQuestion"
import Link from "next/link"

export default function Chapter ({params: {chapterNumber}}: {params: {chapterNumber: string}})  {
  const chapter: Chapter | undefined = CHAPTERS.find((chapter) => chapter.chapterNumber === parseInt(chapterNumber))
  if(!chapter) {
    return (
      <div>Chapter not found</div>
    )
  }
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className=" flex justify-between items-center">
    
        <h1 className="text-3xl font-bold">N{chapter.chapterNumber + " " + chapter.name}</h1>
        <Link
          href="/"
          className="border bg-transparent font-semibold border-gray-700 p-4 rounded-lg hover:border-gray-500 duration-300"
        >
          Home
        </Link>
      </div>
      {/* questions */}
      <div className="flex flex-col gap-4 ">
        {chapter.questions.map((question) => {
          return <Question question={question} key={question.questionNumber} />;
        })}
      </div>
    </div>
  );
}
