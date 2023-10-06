import React, { useContext } from "react";
import State3 from "./State3";
import { MyContext } from "./State1";

export default function State2() {
  const { countObj } = useContext(MyContext);

  return (
    <div>
      <h1>State 2 ---- {countObj.count}</h1>

      <button
        onClick={() => {
          countObj.setCount(countObj.count + 1);
        }}
      >
        ADD
      </button>
      <State3 />
    </div>
  );
}
