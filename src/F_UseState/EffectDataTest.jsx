import React, { useEffect, useState } from "react";
import CardComponent from "../F_datamanage/props/sample/CardComponent";
import LoadingComponent from "./productpages/LoadingComponent";

export default function EffectDataTest() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const requestAPI = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        // api요청 구문작성
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("API가 요청에 응답하지 않습니다.");
        const products = await response.json();
        const newProducts = products.products.map(
          ({
            id,
            title,
            category,
            price,
            rating,
            stock,
            brand,
            weight,
            images,
            thumbnail,
          }) => {
            return {
              id,
              title,
              category,
              price,
              rating,
              stock,
              brand,
              weight,
              images,
              thumbnail,
            };
          },
        );
        setProducts(newProducts);
        setLoading(false);
      }, 2000);
    } catch (e) {
      alert(e.message);
    }
  };
  useEffect(() => {
    requestAPI();
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold p-2">외부 API에서 데이터 가져오기</h2>
      {isLoading ? (
        <LoadingComponent color="text-red-400" text="상품 로딩중" />
      ) : (
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-10">
          {products.map((product, index) => {
            return (
              <CardComponent
                key={product.id}
                title={product.title}
                imgSrc={product.thumbnail}
              >
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.rating}</p>
              </CardComponent>
            );
          })}
        </div>
      )}
    </div>
  );
}
