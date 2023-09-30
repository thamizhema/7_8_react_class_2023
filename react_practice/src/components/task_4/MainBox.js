import React, { useState } from "react";
import Circle from "./Circle";

export default function MainBox() {
  const [selectedIndex, setIndex] = useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function onSelect(index) {
    setIndex(index);
  }

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              background: selectedIndex === index ? "green" : "red",
              height: 100,
              width: 100,
              display: "inline-block",
              margin: 10,
            }}
            onClick={() => {
              setIndex(index);
            }}
          >
            test
          </div>
        );
      })}
      {arr.map((item, ind) => (
        <Circle
          isSelected={selectedIndex === ind}
          onSelect={() => {
            onSelect(ind);
          }}
        />
      ))}
    </div>
  );
}
