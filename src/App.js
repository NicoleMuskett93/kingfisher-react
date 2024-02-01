import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const number = 2;
  return (
    <div>
      {number > 1 ? "greater than 1" : "less than or equal to 1"}
      <Button message={"Button 1"} />
      <Button message={"Button 1"} />
      <Button message={"Button 1"} />
      <Counter />
    </div>
  );
}

export default App;
