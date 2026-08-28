import React, { useEffect, useState } from "react";
import CardComponent from "../F_datamanage/props/sample/CardComponent";
import LoadingComponent from "./productpages/LoadingComponent";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";

export default function FristPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [serchitems, setSerchItems] = useState([]);
  const requestAPI = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("API가 요청에 응답하지 않습니다.");
        const items = await response.json();
        const newItems = items.items.map(
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
        setItems(newItems);
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
      <input type="text" placeholder="입력하세요" />
      <ButtonComponent type="primary" size="small">
        검색
      </ButtonComponent>
      {isLoading ? (
        <LoadingComponent color="text-red-400" text="상품 로딩중" />
      ) : (
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-10">
          {items.map((product, index) => {
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
