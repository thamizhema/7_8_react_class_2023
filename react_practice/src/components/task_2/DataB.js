import React from "react";

export default function DataB({ dataList }) {
  return (
    <div>
      <ol>
        {dataList.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ol>
    </div>
  );
}
