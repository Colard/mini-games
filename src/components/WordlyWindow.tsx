import React from "react";

interface WordlyWindowProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  wordList: string[];
  correctWord: string;
  currentAttempt?: number;
  maxAttempts: number;
}

let WordlyWindow: React.FC<WordlyWindowProps> = ({
  className = "",
  wordList,
  correctWord,
  currentAttempt = 0,
  maxAttempts,
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`} {...rest}>
      {Array.from({ length: maxAttempts }).map((_, i) => (
        <WordLine
          key={i}
          correctWord={correctWord}
          word={wordList[i] || ""}
          cheked={currentAttempt > i}
        />
      ))}
    </div>
  );
};

interface WordLineProps {
  word: string;
  correctWord?: string;
  cheked?: boolean;
}

const checkLetter = (word: string, correctWord: string, i: number) => {
  if (word[i] === correctWord[i]) {
    return "bg-green-500";
  }

  if (word[i] && correctWord.includes(word[i])) {
    return "bg-yellow-500";
  }

  return "bg-gray-500";
};

let WordLine: React.FC<WordLineProps> = React.memo(
  ({ word, correctWord, cheked }) => {
    return (
      <div className="flex gap-2">
        {Array.from({ length: correctWord?.length || 5 }).map((_, i) => (
          <div
            key={i}
            className={`flex size-12 items-center justify-center rounded border text-2xl font-bold ${
              cheked && checkLetter(word, correctWord || "", i)
            }`}
          >
            {word[i] || ""}
          </div>
        ))}
      </div>
    );
  },
);

export default WordlyWindow;
