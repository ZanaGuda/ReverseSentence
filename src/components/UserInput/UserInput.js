import React, { useState } from "react";
import Button from "../UI/Button";
import "./UserInput.css";
const UserInput = (props) => {
  const [enteredSentence, setEnteredSentence] = useState("");

  const sentenceChangeHandler = (e) => {
    setEnteredSentence(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    props.onAddSentence(enteredSentence);
  };
  return (
    <form onSubmit={onSubmitForm} className="form-control sentence-form">
      <input
        type="text"
        value={enteredSentence}
        onChange={sentenceChangeHandler}
      ></input>
      <Button type="submit">Add a sentence</Button>
    </form>
  );
};

export default UserInput;
