import React, { useState, useEffect, useLayoutEffect } from "react";

// Component Lifecycle:
// 1. Mount (initial render)
// 2. Updates (re-render)
// 3. Unmount (when component is removed)

const NewCounterDemo = () => {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  //will run synchronously after render
  //after component renders, ULE will run but wont be painted to screen
  useLayoutEffect(() => {
    if (count === 3) {
      setCount(4);
    }
  }, [count]);

  useEffect(() => {
    console.log("mounted");
    //cleanup will only run on unmount
    //so if the entire component NewCounterDemo is 'hidden' by the button, the return cleanup function will run!
    return () => console.log("unmounted");
  }, []);

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div style={{ border: "3px solid red", padding: "20px" }}>
      <button onClick={() => setBool(!bool)}>Re-render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default NewCounterDemo;
