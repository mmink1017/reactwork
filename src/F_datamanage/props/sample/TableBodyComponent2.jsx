import React from "react";

export default function TableBodyComponent({ bodyData = [] }) {
  return (
    <tbody>
      {bodyData.map((data, index) => {
        const tds = Object.values(data).map((value, i) => {
          return <td key={`${value}_${i}`}>{value}</td>;
        });
        return <tr key={`${index}`}>{tds}</tr>;
      })}
    </tbody>
  );
}
