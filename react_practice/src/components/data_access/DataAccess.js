import axios from "axios";
import React, { useReducer, useState } from "react";
import { dataReducer } from "./data_reducer";
import { computeHeadingLevel } from "@testing-library/react";

export default function DataAccess() {
  //   const [state, dispatch] = useReducer(dataReducer, { todos: [] });
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);
  const [rest, setRest] = useState(["js", "HTML"]);

  function getData() {
    // const resData = await axios.get(url);
    // console.table(resData.data);
    //  dispatch({ type: "GET_TODOS", data: resData.data });
    // console.log("rest = ", rest);
    // const d = { ...rest, completed: true };
    // console.log("d = ", d);

    axios
      .get(url)
      .then((res) => {
        console.table(res.data);
        setTodos(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  function onUserChange(e) {
    const val = e.target.value;
    axios.get(url).then((res) => {
      const resData = res.data;
      const f_data = resData.filter((value) => value.userId == val);
      console.log(f_data);
      setTodos(f_data);
    });
  }
  return (
    <div>
      <h1>{JSON.stringify(rest)}</h1>
      <select onChange={onUserChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <button onClick={getData}>Get data</button>
      <ol>
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: todo.completed && "line-through" }}
            >
              {todo.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
