import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Props/Hello";
import Comment from "./components/Props/Comment";

function App() {
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
    </div>
  );
}

export default App;
