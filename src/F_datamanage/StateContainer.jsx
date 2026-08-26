import React from "react";
import A_BasicState from "./state/A_BasicState";
import B_StateObject from "./state/B_StateObject";

export default function StateContainer() {
  return (
    <div className="p-4">
      <h4 className="text-3xl font-bold">State데이터 이용하기</h4>
      {/* <A_BasicState /> */}
      <B_StateObject />
    </div>
  );
}
