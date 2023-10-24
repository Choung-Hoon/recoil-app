import "./App.css";
import { atom, useRecoilState } from "recoil";

// atom 설정
const recoilState = atom({
  key: "count",
  default: 10,
});

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
