import React, { useEffect } from "react";

export default function DataA({ dataList }) {
  useEffect(() => {
    console.log("Data A useEffect called");
  });
  return (
    <div>
      <ul>
        {dataList.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
