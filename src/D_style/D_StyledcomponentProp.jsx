import React from "react";

export default function D_StyledComponentProp(props) {
  return (
    <div className={props.className}>
      <h2>내가 만든 컴포넌트</h2>
      <span>styled가 전달한 className : {props.className}</span>
    </div>
  );
}
