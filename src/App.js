import "./App.css";
import { useRecoilState } from "recoil";
import { recoilState } from "./atom";

function Counter() {
  const [count, setCount] = useRecoilState(recoilState);

  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

function DisplayCounter() {
  const [count] = useRecoilState(recoilState);
  return <div>{count}</div>;
}

function App() {
  return (
    <div>
      <Counter />
      <DisplayCounter />
    </div>
  );
}

export default App;
