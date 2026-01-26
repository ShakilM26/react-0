import { useState, useEffect, useContext, useRef, useMemo, useCallback } from "react";
import { UserContext } from "./App.jsx";

function Dashboard() {
  // Consume global user data
  const user = useContext(UserContext);

  // Counter state
  const [count, setCount] = useState(0);

  // Input reference
  const inputRef = useRef(null);

  // Run effect when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // Memoized calculation
  const squaredValue = useMemo(() => {
    return count * count;
  }, [count]);

  // Memoized function
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  // Focus input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>User: {user}</h2>

      <p>Count: {count}</p>
      <p>Squared Count: {squaredValue}</p>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <input ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Dashboard;
