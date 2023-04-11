// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Props/Hello";
import Comment from "./components/Props/Comment";
import Button from "./Button";
import { useState, useReducer } from "react";

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
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <Hello name="Olivia" />
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Counter
        count={state.count}
        onClick={() => dispatch({ type: "increment", num: 1 })}
      />
      <Counter
        count={state.count}
        onClick={() => dispatch({ type: "decrement", num: 10 })}
      />
      {/* <Hello name="Shane" />
      <Hello /> */}
      {/* having components inside components, and having children is known as 'component composition' */}
      <Comment username="Olivia" time={new Date().toDateString()}>
        <h1>Hello World</h1>
        <p>This is a comment</p>
      </Comment>
      <Button onClick={handleClick}>Click me</Button>
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
