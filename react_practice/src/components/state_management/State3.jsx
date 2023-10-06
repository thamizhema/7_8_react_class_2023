import React, { useEffect } from "react";
import State4 from "./State4";

export default function State3() {
  useEffect(() => {
    console.log("state 3 useEffect called");
  }, []);
  return (
    <div>
      <h1>State3</h1>
      <State4 />
    </div>
  );
}
