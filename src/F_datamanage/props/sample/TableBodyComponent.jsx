import React from "react";

export default function TableBodyComponent({
  bodyData = [],
  checkbox = false,
}) {
  return (
    <tbody>
      {bodyData.map((data, index) => {
        const tds = Object.values(data).map((value, i) => {
          return <td key={`${value}_${i}`}>{value}</td>;
        });
        if (checkbox) {
          tds.unshift(
            <td>
              <input
                type="checkbox"
                onChange={checkbox.handler}
                value={index}
              />
            </td>,
          );
        }
        return <tr key={`${index}`}>{tds}</tr>;
      })}
    </tbody>
  );
}
