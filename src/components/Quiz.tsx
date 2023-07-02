"use client";
import { useState } from "react";
import { Question } from "./Question";
import Button from "./Button";
import useLocalStorage from "@/hooks/useLocalStorage";
import Timer from "./Timer";

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [rightScore, setRightScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [scrollOn, setScrollOn] = useLocalStorage("scroll", false); //
  const [currentWords, setCurrentWords] = useState<WordType>([]); // [currentWord, setCurrentWord] = useState(""
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentWords(data);
      });
  };
  const handleSelection = () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText?.length) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentWords(data);
        });
    }
  };
  console.log(currentWords);
  const contentWords = currentWords.length ? (
    <div className="flex flex-col gap-1 max-w-[50ch]">
      <h1 className="text-xl font-semibold">{currentWords[0].word}</h1>
      <p className="text-light-tsecondary dark:text-tsecondary">
        {currentWords[0].meanings[0].partOfSpeech}{" "}
      </p>
      <p>{currentWords[0].meanings[0].definitions[0].definition}</p>
      <p className="border-l-4 border-l-secondary dark:border-l-tsecondary pl-3">
        {currentWords[0].meanings[0].definitions[0].example}
      </p>
    </div>
  ) : null;

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
              setRightScore={setRightScore}
              setWrongScore={setWrongScore}
              question={question}
              key={question.key ? question.key : question.questionNumber}
            />
          );
        })}
      </div>
      <div className="sticky top-0 self-start flex flex-col gap-3 p-5">
        <div className="flex gap-3 flex-wrap">
          <Button disabled={true} onClick={() => {}}>
            All {questions.length} Questions
          </Button>
          <Button disabled={true} onClick={() => {}}>
            Right: {rightScore}
          </Button>
          <Button disabled={true} onClick={() => {}}>
            Wrong: {wrongScore}
          </Button>
          <Button onClick={() => setScrollOn((prev: any) => !prev)}>
            {scrollOn ? "Scroll On" : "Scroll Off"}
          </Button>
          <Button onClick={() => window.scrollTo(0, 0)}>Scroll Top</Button>
        </div>
        <Timer duration={10000} />
        <div className="flex gap-3">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="border text-left border-light-secondary dark:border-secondary p-3 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300 "
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
        <div>{contentWords}</div>
      </div>
    </div>
  );
};

export default Quiz;
