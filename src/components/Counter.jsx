import { useState } from "react";
import Button from "./Button";

const Counter = (button, props) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <Button message="Increment" handleClick={increment} />
    </div>
  );
};

export default Counter;
