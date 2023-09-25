import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyClass from "./components/common/MyClass";
import Button from "./components/common/Button";
import Container from "./components/common/Container";

export default function App() {
  return (
    <>
      <h1>MY heading</h1>
      <h2>My Heading 2</h2>
      <Container>
        <Button
          value="Save"
          color="red"
          onPress={() => {
            console.log("save button pressed");
          }}
        />
        <Button value="Download" color="green" heading={"MY Downloads"} />
        <Button value="close" color="pink" />
      </Container>
      <Container>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
          <li>ite5</li>
        </ul>
      </Container>
    </>
  );
}
