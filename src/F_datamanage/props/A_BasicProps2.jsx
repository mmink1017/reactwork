import React from "react";
//props데이터 구조분해할당으로 저장하기
export default function A_BasicProps2({ title }) {
  //   const { title } = props;
  return (
    <div>
      <p clsssName="text-xl">{title}</p>
    </div>
  );
}
