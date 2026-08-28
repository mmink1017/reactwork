import React, { useState } from "react";
import TableHeaderComponent from "../../F_datamanage/props/sample/TableHeaderComponent";
import TableBodyComponent from "../../F_datamanage/props/sample/TableBodyComponent";
import ButtonComponent from "../../F_datamanage/props/sample/ButtonComponent";
export default function ProductList({ products, setProducts }) {
  const deleteProduct = (e) => {
    const newProducts = products.filter((_, i) => {
      return !deleteTarget.includes(i);
    });
    setProducts(newProducts);
    setDeleteTarget([]);
  };
  const [deleteTarget, setDeleteTarget] = useState([]);
  return (
    <div>
      <h2 className="text-xl font-bold">상품 리스트</h2>
      <ButtonComponent
        type="secondary"
        clickHandler={() => {
          setDeleteTarget(products.map((_, i) => i));
        }}
      >
        전체선택
      </ButtonComponent>
      <ButtonComponent
        type="primary"
        clickHandler={() => {
          setDeleteTarget([]);
        }}
      >
        전체해제
      </ButtonComponent>
      <ButtonComponent type="danger" clickHandler={deleteProduct}>
        상품삭제
      </ButtonComponent>
      <table className="w-200">
        <TableHeaderComponent
          header={["구분", "상품번호", "상품명", "상품가격", "종류", "색상"]}
        />
        <TableBodyComponent
          bodyData={products}
          checkbox={{
            handler: (e) => {
              const { value, checked } = e.target;
              if (checked) {
                const newDeleteTarget = Array.from(
                  new Set([...deleteTarget, Number(value)]),
                );
                setDeleteTarget(newDeleteTarget);
              } else {
                const filterData = deleteTarget.filter(
                  (d) => d !== Number(value),
                );
                setDeleteTarget(filterData);
              }
            },
            deleteTarget: deleteTarget,
          }}
        />
      </table>
    </div>
  );
}
