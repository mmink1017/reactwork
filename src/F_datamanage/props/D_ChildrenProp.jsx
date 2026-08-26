import React from "react";

export default function D_ChildrenProp(props) {
  console.log(props.children);
  return (
    <div className="p-4">
      <h3>자식으로 전달되 데이터 활용</h3>
      <p>
        {typeof props.children !== "object"
          ? props.children
          : JSON.stringify(props.children)}
      </p>
    </div>
  );
}
