import React, { useContext, useEffect } from "react";
import { MyContext } from "./State1";

export default function State4() {
  const { state4 } = useContext(MyContext);
  console.log(state4);

  return (
    <div>
      <h1>state 4</h1>
      <p>{state4.myVal}</p>
      <button
        onClick={() => {
          state4.setValue("new vlue");
        }}
      >
        Change
      </button>
    </div>
  );
}
