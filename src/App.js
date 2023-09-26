import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
