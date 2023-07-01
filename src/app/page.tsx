import {CHAPTERS} from "@/assets/data"
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col max-w-2xl mx-auto p-4 gap-4">
      <h1 className="font-bold text-3xl">
        Chapters
      </h1>
      <div className="flex flex-col gap-4 ">
      {
        CHAPTERS.map((chapter) => {
          return (
            <Link href={`/chapter/${chapter.chapterNumber}`} key={chapter.chapterNumber}>
            <div className="bg-transparent  border border-gray-700 p-3 cursor-pointer rounded-lg hover:border-gray-500 duration-300">
              <h1> 
                {chapter.chapterNumber} {chapter.name}
              </h1>
            </div>
            </Link>
          )
        })
      }
      </div>
    </main>
  )
}
