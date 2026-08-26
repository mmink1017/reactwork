import React from "react";

export default function D_ChildrenJsxProps({ children }) {
  //   console.log(children);
  const childrenData = Array.isArray(children)
    ? children
    : React.Children.toArray(children);
  return (
    <div>
      <h3>jsx 처리하기</h3>
      {/* {children} */}
      {childrenData
        .filter((v) => v.type === "p")
        .map((v, i) => {
          return <p key={`${v}_${i}`}>{v}</p>;
        })}
    </div>
  );
}
