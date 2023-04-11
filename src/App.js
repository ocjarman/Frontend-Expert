import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Props/Hello";
import Comment from "./components/Props/Comment";
import Button from "./Button";

export default function App() {
  return (
    <div className="App">
      <Hello name="Olivia" />
      <Hello name="Shane" />
      <Hello />
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
