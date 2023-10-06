import { useState } from "react";
import Home from "./components/home/Home";
import State1 from "./components/state_management/State1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Heading</h1>
      {/* <Home /> */}
    </>
  );
}

export default App;
