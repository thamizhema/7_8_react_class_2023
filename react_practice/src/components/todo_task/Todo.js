import React, { useEffect, useState } from "react";

export default function Todo() {
  const [taskList, setTaskList] = useState([{ isDone: false, title: "task1" }]);
  const [inpValue, setInpValue] = useState("");
  const [runUseEffect, setRunUseEffect] = useState(false);
  function inputHandler(e) {
    const { value } = e.target;
    setInpValue(value);
  }

  function addTask() {
    setTaskList([...taskList, { isDone: false, title: inpValue }]);
    setInpValue("");
  }
  function onChangeCheckBox(e, index) {
    console.log(e.target.checked);
    taskList[index].isDone = e.target.checked;
    console.log(taskList);
    setTaskList(taskList);
    setRunUseEffect(!runUseEffect);
  }

  useEffect(() => {
    console.log("useEffect called");
  }, [runUseEffect]);

  return (
    <div>
      <input type="text" value={inpValue} onChange={inputHandler} />{" "}
      <button onClick={addTask}>add</button>
      <br />
      <br />
      <hr />
      <br />
      <ul>
        {taskList.map((task, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(event) => {
                  onChangeCheckBox(event, index);
                }}
              />
              <span style={{ textDecoration: task.isDone && "line-through" }}>
                {task.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
