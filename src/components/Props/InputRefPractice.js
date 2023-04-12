import React, { useRef } from "react";
import SpecialInput from "./SpecialInput";

const InputRefPractice = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ border: "5px solid limegreen" }}>
      <button onClick={focusInput}>Focus</button>
      <SpecialInput ref={inputRef} />
    </div>
  );
};

export default InputRefPractice;
