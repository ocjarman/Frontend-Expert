// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Props/Hello";
import Comment from "./components/Props/Comment";
import Button from "./Button";
import { useState, useReducer, useRef } from "react";
import NewCounterDemo from "./components/Props/NewCounterDemo";
import InputRefPractice from "./components/Props/InputRefPractice";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.num };
    case "decrement":
      return { count: state.count - action.num };
    default:
      throw new Error("Unknown action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [isShown, setIsShown] = useState(true);
  const [seconds, setSeconds] = useState(0);

  //timer ID is an object with a current property
  //used when you need to put an object into state and never calling the setter fxn
  //value will persist across renders but changign the value will never cause a rerender
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((currSeconds) => currSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div className="App">
      <InputRefPractice />
      <div className="refPractice">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <p>seconds: {seconds} </p>
      </div>
      <div style={{ border: "2px solid blue" }}>
        <Hello name="Olivia" />
        <button onClick={() => setIsShown(!isShown)}>
          {isShown ? "Hide Counter" : "Show Counter"}
        </button>
        {isShown ? <NewCounterDemo /> : null}
        {/* <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}
        <Counter
          count={state.count}
          onClick={() => dispatch({ type: "increment", num: 1 })}
        />
        {/* <Counter
        count={state.count}
        onClick={() => dispatch({ type: "decrement", num: 10 })}
      /> */}
        {/* <Hello name="Shane" />
      <Hello /> */}
        {/* having components inside components, and having children is known as 'component composition' */}
        <Comment username="Olivia" time={new Date().toDateString()}>
          <h1>Hello World</h1>
          <p>This is a comment</p>
        </Comment>
        <Button onClick={handleClick}>Click me</Button>
      </div>
    </div>
  );
}

const handleClick = (event) => {
  console.log(event.nativeEvent);
};

function Counter({ count, onClick }) {
  return (
    //setting count 3x here will increment by 3 each time button click
    <div>
      <button onClick={onClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
