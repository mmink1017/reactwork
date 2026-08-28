import React, { useState, useEffect } from "react";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";
import CardComponent from "../F_datamanage/props/sample/CardComponent";
import LoadingComponent from "./productpages/LoadingComponent";
export default function ProductSearch() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const prePage = () => {
    if (isError) return <p>에러에러 발생!</p>;

    return <LoadingComponent color="text-green-500" text="데이터 로드 중..." />;
  };
  useEffect(() => {
    requestProduct();
  }, []);
  const requestProduct = async () => {
    setError(false);
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products${keyword === "" ? "" : `/search?q=${keyword}`}`,
      );
      if (!response.ok) throw new Error("서버오류 :(");
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  const searchBtnHandler = async (e) => {
    if (keyword === "") {
      alert("검색어를 입력하세요");
      return;
    }
    requestProduct();
  };
  return (
    <div className="p-4">
      <div>
        <input
          type="search"
          className="rounded border border-gray-300"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <ButtonComponent type="secondary" clickHandler={searchBtnHandler}>
          검색
        </ButtonComponent>
      </div>
      {isLoading || isError ? (
        prePage()
      ) : (
        <div className="p-2 grid grid-cols-5 gap-10">
          {products.map((product) => {
            return (
              <CardComponent
                key={product.id}
                title={product.title}
                imgSrc={product.thumbnail}
              >
                <p className="text-lg font-bold">{product.category}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <p className="text-lg font-bold">{product.rating}</p>
              </CardComponent>
            );
          })}
        </div>
      )}
    </div>
  );
}
