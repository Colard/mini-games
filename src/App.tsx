import { useEffect, useState } from "react";
import WordlyWindow from "./assets/components/WordlyWindow";

const MAX_ATTEMPTS = 6;

function App() {
  const [correctWord, setCorrectWord] = useState<string | null>(null);
  const [words, setWords] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCorrectWord("HELLO");
  }, []);

  useEffect(() => {
    const pressKey = (e: KeyboardEvent) => {
      if (gameOver) return;

      if (e.key.match(/^[a-zA-Z]$/)) {
        if (words[currentAttempt]?.length === correctWord?.length) return;
        const key = e.key.toUpperCase();

        words[currentAttempt] = words[currentAttempt]
          ? words[currentAttempt] + key
          : key;

        setWords([...words]);
      }

      if (e.key === "Backspace") {
        words[currentAttempt] = words[currentAttempt]
          ? words[currentAttempt].slice(0, -1)
          : "";
        setWords([...words]);
      }

      if (e.key === "Enter") {
        if (correctWord === words[currentAttempt]) {
          console.log("YOU WIN!");
          setCurrentAttempt(currentAttempt + 1);
          setGameOver(true);
          return;
        }

        if (currentAttempt === MAX_ATTEMPTS - 1) {
          console.log("YOU LOSE!");
          setCurrentAttempt(currentAttempt + 1);
          setGameOver(true);
          return;
        }

        if (
          currentAttempt < MAX_ATTEMPTS &&
          correctWord?.length &&
          words[currentAttempt]?.length &&
          words[currentAttempt].length === correctWord?.length
        ) {
          setCurrentAttempt(currentAttempt + 1);
        }
      }
    };

    window.addEventListener("keydown", pressKey);

    return () => {
      window.removeEventListener("keydown", pressKey);
    };
  }, [words, currentAttempt, correctWord]);

  return (
    <div className="flex justify-center">
      <WordlyWindow
        className="m-auto pt-20"
        wordList={words}
        maxAttempts={MAX_ATTEMPTS}
        currentAttempt={currentAttempt}
        correctWord={correctWord ?? ""}
      ></WordlyWindow>
    </div>
  );
}

export default App;
