import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{ color: "purple" }}>Hello world</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
