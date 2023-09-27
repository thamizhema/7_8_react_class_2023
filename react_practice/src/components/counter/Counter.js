import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("red");
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  function add() {
    setCount(count++);
  }
  function sub() {
    setCount(count--);
  }

  function onSubmit() {
    console.log(userInfo);
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    //[name] = username

    // switch (e.target.type) {
    //   case "text":
    //     setUserInfo({ ...userInfo, username: e.target.value });
    //     break;
    //   case "email":
    //     setUserInfo({ email: e.target.value });
    //     break;
    //   case "password":
    //     setUserInfo({ password: e.target.value });
    //     break;

    //   default:
    //     break;
    // }
  }
  return (
    <div>
      <button onClick={add}>+</button>
      <h1>{count}</h1>
      <button onClick={sub}> - </button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <div style={{ height: 100, width: 100, background: color }}></div>

      <input
        type="text"
        placeholder="username"
        name="username"
        value={userInfo.username}
        onChange={onChangeHandler}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={userInfo.email}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={userInfo.password}
        onChange={onChangeHandler}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
