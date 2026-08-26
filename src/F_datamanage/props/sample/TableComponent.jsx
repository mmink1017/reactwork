import React from "react";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyComponent from "./TableBodyComponent";
export default function TableComponent({ data = [] }) {
  return (
    <table>
      <TableHeaderComponent header={Object.keys(data[0])} />
      <TableBodyComponent bodyData={data} />
    </table>
  );
}
