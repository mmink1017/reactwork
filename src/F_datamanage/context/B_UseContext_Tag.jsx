import React from "react";
import { ContextTest } from "./resources/Context";
import B_Child from "./child/B_Child";
export default function B_UseContext_Tag() {
  return (
    <div>
      <h2>태그 방식으로 Context데이터 가져오기</h2>
      <p>Context객체명.consumer태그를 이용 value값을 가져와 사용이 가능</p>
      <ContextTest.Consumer>
        {(value) => {
          return <p>value:{value}</p>;
        }}
      </ContextTest.Consumer>
      <B_Child />
    </div>
  );
}
