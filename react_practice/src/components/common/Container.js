import React from "react";

export default function Container(props) {
  return (
    <div
      style={{
        borderRadius: 10,
        background: "lightblue",
        padding: 15,
        display: "inline-block",
      }}
    >
      {props.children}
    </div>
  );
}
