import React, { useState } from "react";
import ProductList from "./productpages/ProductList";
import ProductInput from "./productpages/ProductInput";
import { stateTestData } from "@/data/exportData";
import EffectDataTest from "./EffectDataTest";
export default function ProductContainer() {
  const [products, setProducts] = useState(stateTestData);
  return (
    <div>
      {/* 상품 리스트를 출력 table / 상품입력하는 component를 분리해서 관리하기 상품
      : productNo, productName, price, type, color */}
      {/* <ProductList products={products} setProducts={setProducts} />
      <ProductInput setProducts={setProducts} /> */}
      <EffectDataTest />
    </div>
  );
}
