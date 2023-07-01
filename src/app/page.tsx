import { CHAPTERS } from "@/assets/data";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">Chapters</h1>
      <div className="flex flex-col gap-4">
        {CHAPTERS.map((chapter) => {
          return (
            <LinkButton
              href={`/chapter/${chapter.chapterNumber}`}
              key={chapter.chapterNumber}
            >
              {chapter.chapterNumber}. {chapter.name}
            </LinkButton>
          );
        })}
      </div>
    </main>
  );
}
