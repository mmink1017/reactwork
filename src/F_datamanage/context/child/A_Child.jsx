import React from "react";
import A_Child2 from "./A_Child2";

export default function A_Child({ data }) {
  return (
    <div>
      <h4>A_Child컴포넌트</h4>
      <p>데이터를 사용하지 않는 중간 컴포넌트</p>
      <A_Child2 data={data} />
    </div>
  );
}
