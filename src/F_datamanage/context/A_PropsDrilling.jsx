import React from "react";
import A_Child from "./child/A_Child";

export default function A_PropsDrilling({ data }) {
  return (
    <div className="border border-grey-100 p-3">
      <h3>A_PropsDrilling컴포넌트</h3>
      <p>데이터를 사용하지 않는 중간 컴포넌트</p>
      <A_Child data={data} />
    </div>
  );
}
