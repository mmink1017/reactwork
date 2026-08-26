import React from "react";

export default function D_StyledcomponentProp(props) {
  return (
    <div className={props.className}>
      <h2>내가 만든 컴포넌트</h2>
      <span>className:{props.className}</span>
    </div>
  );
}
