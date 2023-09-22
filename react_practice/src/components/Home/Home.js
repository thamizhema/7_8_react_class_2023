import React from "react";
import "./home.css";
import Title from "../common/Title";
export default function Home() {
  const name = "JavaScript";

  return (
    <div className="home-div">
      <Title text={name} />
    </div>
  );
}
