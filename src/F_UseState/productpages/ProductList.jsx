import React, { useState } from "react";
import TableHeaderComponent from "../../F_datamanage/props/sample/TableHeaderComponent";
import TableBodyComponent from "../../F_datamanage/props/sample/TableBodyComponent";
export default function ProductList({ products }) {
  return (
    <div>
      <h2 className="text-xl font-bold">상품 리스트</h2>
      <table>
        <TableHeaderComponent
          header={["상품번호", "상품명", "상품가격", "종류", "색상", ""]}
        />
        <TableBodyComponent bodyData={products} />
      </table>
    </div>
  );
}
