"use client";
import { useState } from "react";
import { Question } from "./Question";
import Button from "./Button";
import useLocalStorage from "@/hooks/useLocalStorage";
import Timer from "./Timer";
import { useGlobalContext } from "@/contexts/MyGlobalContext";

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [rightScore, setRightScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [scrollOn, setScrollOn] = useLocalStorage("scroll", false); //
  const [currentWords, setCurrentWords] = useState<WordType>([]); // [currentWord, setCurrentWord] = useState(""
  const [searchText, setSearchText] = useState<string>("");
  const [timerOn, setTimerOn] = useLocalStorage("timer", false);
  const [animeGirl, setAnimeGirl] = useLocalStorage("animegirl", false);
  const [showMenu, setShowMenu] = useState(false);
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
  const { godMode } = useGlobalContext();

  return (
    <div className={"flex " + (godMode ? "flex-col" : "")}>
      <div
        className={
          "flex flex-col gap-4 pb-5 " + (godMode ? "" : "max-w-[75ch] ")
        }
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
      <div
        className={
          "flex flex-col gap-3 bg-white dark:bg-back self-start " +
          (godMode
            ? "-order-1 w-1/2 right-0 p-5 bottom-0 rounded-lg fixed border-t border-l border-light-secondary dark:border-secondary"
            : "sticky p-5 top-0")
        }
      >
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
          <Button onClick={() => setTimerOn((p: any) => !p)}>Timer On</Button>
          {timerOn && (
            <Button onClick={() => setAnimeGirl((p: any) => !p)}>
              Anime Girl
            </Button>
          )}
        </div>
        {timerOn ? <Timer animeGirl={animeGirl} /> : null}
        <div className={"flex gap-3 "}>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="border text-left border-light-secondary rounded-lg dark:border-secondary p-3 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300 "
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
        <div className="border text-left border-light-secondary rounded-lg dark:border-secondary p-3">
          {contentWords}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
