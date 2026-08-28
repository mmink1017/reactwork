import React from "react";
import B_InlineEvent from "./B_InlineEvent";
import C_FunctionEvent from "./C_FunctionEvent";
//이벤트 설정하기
export default function A_EventContainer() {
  return (
    <div>
      <h2>이벤트설정</h2>
      {/* <B_InlineEvent /> */}
      <C_FunctionEvent />
    </div>
  );
}
