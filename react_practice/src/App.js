import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyClass from "./components/common/MyClass";
import Button from "./components/common/Button";
import Container from "./components/common/Container";
import Counter from "./components/counter/Counter";
import MainDiv from "./components/task_2/MainDiv";
import MyDataComp from "./components/task_3/MyDataComp";
import MainBox from "./components/task_4/MainBox";
import State1 from "./components/state_management/State1";
import MyReducerComp from "./components/my_reducer/MyReducerComp";
import DataAccess from "./components/data_access/DataAccess";
import Todo from "./components/todo_task/Todo";
import MyStyle from "./components/ref_practice/MyStyle";

export default function App() {
  return (
    <>
      <MyStyle />
      {/* <Todo /> */}
      {/* <DataAcces
      
      s /> */}
      {/* <MyReducerComp /> */}
      {/* <State1 /> */}
      {/* <MyDataComp /> */}
      {/* <MainDiv /> */}
      {/* <Counter /> */}
      {/* <h1>MY heading</h1>
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
      </Container> */}
    </>
  );
}
