import React, { useReducer } from "react";
import { myData } from "../task_3/data";
import { myReducer } from "./my_reducer";

export default function MyReducerComp() {
  const [state, dispatch] = useReducer(myReducer, { count: 0, text: "" });
  function onChangeHandler(ev) {
    dispatch({ type: "valueChange", data: ev.target.value });
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <br />
      <h1>{state.text}</h1>
      <input
        type="text"
        // value={state.text}
        onChange={onChangeHandler}
      />
    </div>
  );
}
