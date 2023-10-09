import React from "react";
import { useRef } from "react";

export default function MyStyle() {
  const headingRef = useRef();

  function colorChange() {
    const el = document.querySelector(".style");
    el.style.color = "red";
    // console.log(headingRef.current);
  }

  return (
    <div ref={headingRef} className="style" style={{ color: "" }}>
      <h1>Heading</h1>

      <button
        onClick={() => {
          colorChange();
          //   headingRef.current.style.color = "blue";
        }}
      >
        Change Color
      </button>
    </div>
  );
}
