import React from "react";

export default function TableHeaderComponent({ header = [] }) {
  return (
    <thead>
      <tr>
        {header.map((item, i) => {
          return <th key={item}>{item}</th>;
        })}
      </tr>
    </thead>
  );
}
