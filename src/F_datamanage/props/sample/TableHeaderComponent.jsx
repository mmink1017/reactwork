import React from "react";

export default function TableHeaderComponent({ header = [] }) {
  return (
    <thead>
      <tr>
        <th>구분</th>
        {header.map((item, i) => {
          return <th key={item}>{item}</th>;
        })}
      </tr>
    </thead>
  );
}
