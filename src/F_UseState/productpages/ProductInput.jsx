import React, { useState } from "react";
import clsx from "clsx";
import ButtonComponent from "../../F_datamanage/props/sample/ButtonComponent";
const type = ["식품", "전자기기", "악세사리", "주방용품", "기타"];
const color = [
  { key: "빨강", value: "red" },
  { key: "파랑", value: "blue" },
  { key: "주황", value: "orange" },
  { key: "초록", value: "green" },
];
export default function ProductInput({ setProducts }) {
  const [product, setProduct] = useState({
    productNo: 0,
    productName: "",
    price: 0,
    type: "",
    color: "",
  });
  const addProduct = (e) => {
    setProducts((prev) => {
      return [...prev, product];
    });
  };
  const cancelProduct = (e) => {};
  const productChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold">상품등록</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="상품명 작성"
          className="p-1 border border-gray-200"
          name="productName"
          onChange={productChangeHandler}
        />
        <input
          type="number"
          placeholder="상품가격"
          className="p-1 border border-gray-200"
          min="1000"
          step="1000"
          name="price"
          onChange={productChangeHandler}
        />
        <select
          className="p-1 border border-gray-2"
          name="type"
          onChange={productChangeHandler}
        >
          <option disabled value="" selected>
            선택
          </option>
          {type.map((t, i) => (
            <option key={`${t}_${i}`} value={t}>
              {t}
            </option>
          ))}
        </select>
        {color.map(({ key, value }, index) => {
          return (
            <label key={`${key}_${index}`}>
              <input
                className="w-4 h-4 mr-2"
                name="color"
                type="radio"
                value={value}
                onChange={productChangeHandler}
              />
              <span className={clsx(`text-${value}-500`)}>{key}</span>
            </label>
          );
        })}
        <div className="flex gap-2">
          <ButtonComponent
            size="small"
            type="primary"
            clickHandler={addProduct}
          >
            등록
          </ButtonComponent>
          <ButtonComponent
            size="small"
            type="warn"
            clickHandler={cancelProduct}
          >
            취소
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
