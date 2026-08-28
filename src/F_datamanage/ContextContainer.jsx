import React from "react";
import A_PropsDrilling from "./context/A_PropsDrilling";
import { ContextTest } from "./context/resources/Context";
import B_UseContext_Tag from "./context/B_UseContext_Tag";
export default function ContextContainer() {
  const data = "유병승";
  return (
    <div>
      <h2>context활용하기</h2>
      <h3>props drilling 문제 확인</h3>
      <A_PropsDrilling data={data} />
      <h3>Context적용하기</h3>
      <p>
        별도 js파일을 생성해서 활용, createContext()함수를 이용 - Context객체
        반환 Context.provider - 제공 / Context.consumer - 이용
      </p>
      <ContextTest.Provider value={"오늘 수업 이거 완료하자 dd"}>
        <B_UseContext_Tag />
      </ContextTest.Provider>
    </div>
  );
}
