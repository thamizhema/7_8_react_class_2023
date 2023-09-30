import React from "react";

export default function Circle({ isSelected, onSelect }) {
  return (
    <div
      style={{
        background: isSelected ? "yellow" : "blue",
        height: 100,
        width: 100,
        display: "inline-block",
        margin: 10,
        borderRadius: "50%",
      }}
      onClick={onSelect}
    ></div>
  );
}
