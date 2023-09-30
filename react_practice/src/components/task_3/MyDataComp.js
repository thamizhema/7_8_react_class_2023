import React, { useEffect, useState, useMemo } from "react";
import { myData } from "./data";

export default function MyDataComp() {
  const [userData, setUserData] = useState([]);
  const [myCount, setMyCount] = useState(3);

  function callAPI() {
    let data = ["item1"];
    myData()
      .then((res) => {
        console.log(res);

        setUserData(res);
      })
      .catch((er) => {
        console.log(er);
      });
    return data;
  }
  const memoData = useMemo(() => {
    return myCalc(myCount);
  }, []);

  useEffect(() => {
    console.log("useEffect called");
    callAPI();
  }, [userData]);

  function myCalc(count) {
    for (let i = 0; i < 10000; i++) {
      console.log("i ...");
    }
    setMyCount(count * 3);
    return count * 2;
  }

  return (
    <div>
      <button
        onClick={() => {
          setUserData([...userData, { name: "C++", age: 45 }]);
        }}
      >
        ADD userData
      </button>
      <ol>
        {userData.map((element, i) => {
          return <li key={i}>{element.name}</li>;
        })}
      </ol>
      <h1>{memoData}</h1>
    </div>
  );
}
