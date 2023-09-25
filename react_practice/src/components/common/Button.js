import React from "react";

import "./button.css";

export default function Button({ value, color, onPress, heading }) {
  console.log(onPress);
  //   const { value, color } = props;

  return (
    <>
      {heading && <h1>Heading</h1>}
      <button style={{ background: onPress ? color : "gray" }} className="btn">
        {onPress ? value : "Disabled"}
      </button>
    </>
  );
}
