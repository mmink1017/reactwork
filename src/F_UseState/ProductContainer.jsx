import React, { useState } from "react";
import ProductList from "./productpages/ProductList";
import ProductInput from "./productpages/ProductInput";
export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      상품 리스트를 출력 table / 상품입력하는 component를 분리해서 관리하기 상품
      : productNo, productName, price, type, color
      <ProductList products={products} />
      <ProductInput setProducts={setProducts} />
    </div>
  );
}
