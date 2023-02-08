import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import UserInputList from "./components/UserInputList/UserInputList";

function App() {
  const [typeSentence, setTypeSentence] = useState([]);
  const sentenceAddHandler = (enteredText) => {
    const words = enteredText.split(" ");
    let newText = enteredText;
    if (words.length % 2 === 0) {
      newText = enteredText;
    } else {
      let start = 0;
      let end = words.length - 1;
      while (start < end) {
        let temp = words[start];
        words[start] = words[end];
        words[end] = temp;
        start++;
        end--;
      }
      newText = words.join(" ");
    }
    setTypeSentence((prevSentences) => {
      return [
        ...prevSentences,
        { text: newText, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserInput onAddSentence={sentenceAddHandler} />
      <UserInputList items={typeSentence} />
    </div>
  );
}

export default App;
