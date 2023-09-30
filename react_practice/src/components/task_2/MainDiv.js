import React, { useEffect, useState } from "react";
import DataA from "./DataA";
import DataB from "./DataB";

export default function MainDiv() {
  const [data, setData] = useState({
    inp1: "",
    inp2: "",
  });
  const [dataListA, setDataListA] = useState([]);
  const [dataListB, setDataListB] = useState([]);

  function inputHandler(ev) {
    const { name, value } = ev.target; //{name:'inp1',value:"test hd"}
    setData({ ...data, [name]: value });
  }

  function addData1() {
    setDataListA([...dataListA, data.inp1]);
    setData({ ...data, inp1: "" });
  }
  function addData2() {
    setDataListB([...dataListB, data.inp2]);
    setData({ ...data, inp2: "" });
  }

  function submitHandler() {
    console.log(dataListA);
    console.log(dataListB);
  }

  useEffect(() => {
    console.log("Main Div called");
  }, [dataListA]);
  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        name="inp1"
        value={data.inp1}
        onChange={inputHandler}
      />
      <button onClick={addData1}>ADD</button>

      <br />
      <input
        type="text"
        name="inp2"
        value={data.inp2}
        onChange={inputHandler}
      />
      <button onClick={addData2}>ADD</button>
      <br />
      <button onClick={submitHandler}>submit</button>
      <br />
      <br />
      <DataA dataList={dataListA} />
      <hr />
      <DataB dataList={dataListB} />
    </div>
  );
}
