import React, { createContext, useEffect, useState } from "react";
import State2 from "./State2";

export const MyContext = createContext(null);

export default function State1() {
  const [myVal, setValue] = useState("initial value");
  const [count, setCount] = useState(0);
  const state4 = { myVal, setValue };
  const countObj = { count, setCount };
  useEffect(() => {
    console.log("state 1 useEffect");
  }, []);
  return (
    // <MyContext.Provider value={{ state4, countObj }}>
    <div>
      <h1>State 1</h1>
    </div>
    // </MyContext.Provider>
  );
}
