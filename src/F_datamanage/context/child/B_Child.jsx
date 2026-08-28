import React from "react";
import { ContextTest } from "../resources/Context";
export default function B_Child() {
  return (
    <div>
      <ContextTest.Consumer>
        {(value) => {
          return <p>여기서도 사용:{value}</p>;
        }}
      </ContextTest.Consumer>
    </div>
  );
}
