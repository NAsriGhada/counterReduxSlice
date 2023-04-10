import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByValue } from "./redux/countSlice";
import { useState } from "react";

function App() {
  const count = useSelector(state => state.counterReducer.count)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)
  return (
    <div className="App">
      <h1>count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <input type="number" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={() => dispatch(incrementByValue(+input))}>
        Increment By Value
      </button>
    </div>
  );
}

export default App;
