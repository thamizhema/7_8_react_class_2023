import React from "react";
import "./title.css";

export default function Title(props) {
  console.log(props);
  return (
    <div className="my-title">
      <h1>{props.text}</h1>
      <div></div>
    </div>
  );
}
