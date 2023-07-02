type Question = {
  question: string;
  questionNumber: number;
  answer: string;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  type: "true-false" | "multiple-choice" | "writing";
  difficulty: string;
  explanation?: string;
  key?: string;
};

type Chapter = {
  chapterNumber: number;
  name: string;
  questions: Question[];
};

type WordType = {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
}[];
