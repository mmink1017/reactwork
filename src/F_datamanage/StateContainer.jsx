import React from "react";
import A_BasicState from "./state/A_BasicState";
import B_StateObject from "./state/B_StateObject";
import Ex_StateObject from "./state/Ex_StateObject";
import MemberContainer from "../F_UseState/MemberContainer";

export default function StateContainer() {
  return (
    <div className="p-4">
      <h4 className="text-3xl font-bold"></h4>
      {/* <A_BasicState /> */}
      {/* <B_StateObject /> */}
      <Ex_StateObject />
      <MemberContainer />
    </div>
  );
}
