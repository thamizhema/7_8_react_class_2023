import { all } from "axios";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [taskList, setTaskList] = useState(getTasks());
  const [inpValue, setInpValue] = useState("");
  const [runUseEffect, setRunUseEffect] = useState(false);
  function inputHandler(e) {
    const { value } = e.target;
    setInpValue(value);
  }

  function setTasksToLocal(data) {
    localStorage.setItem("task", JSON.stringify(data));
  }
  function getTasks() {
    const allTaskString = localStorage.getItem("task");
    const allTask = JSON.parse(allTaskString);
    return allTask;
  }

  function addTask() {
    setTaskList([...taskList, { isDone: false, title: inpValue }]);

    setInpValue("");
  }
  function onChangeCheckBox(e, index) {
    taskList[index].isDone = e.target.checked;
    setTaskList(taskList);
    setRunUseEffect(!runUseEffect);
  }

  useEffect(() => {
    console.log("useEffect called");

    setTasksToLocal(taskList);
  }, [runUseEffect, taskList]);

  return (
    <div>
      <input type="text" value={inpValue} onChange={inputHandler} />{" "}
      <button onClick={addTask}>add</button>
      {/* <button onClick={setTasks}>Set</button> */}
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
