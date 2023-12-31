import "./App.css";
import { useState } from "react";

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          props.onUp();
        }}
      >
        +
      </button>
      {props.count}
    </div>
  );
}

function DisplayCounter(props) {
  return <div>{props.count}</div>;
}

function App() {
  const [count, setCount] = useState(20);

  return (
    <div>
      <Counter
        count={count}
        onUp={() => {
          setCount(count + 1);
        }}
      />
      <DisplayCounter count={count} />
    </div>
  );
}

export default App;
