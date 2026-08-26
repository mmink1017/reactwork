import React from "react";

export default function C_UseControll() {
  const age = 19;
  const msg = "리액트 너무 재미있다.";
  const isLoading = true;
  const conditionTestString = (age) => {
    let msg;
    if (age > 19) msg = "성인입니다";
    else msg = "미성년입니다";
    return msg;
  };
  const forTest = (num = 5) => {
    const numbers = [];
    for (let i = 0; i < num; i++) {
      numbers.push(<p>{i}</p>);
    }
    return numbers;
  };
  return (
    <div>
      <h2>조건문 사용하기</h2>
      <p>
        if문이나 switch문은 jsx내부에서 사용이 불가능함. 단 간편연산,
        삼항연산자는 가능
      </p>
      {age > 19 ? <h4>성인입니다</h4> : <h4>미성년입니다.</h4>}
      {msg.includes("리액트") && <h4>리액트가 있다</h4>}
      {msg.includes("리액트") || <h4>리액트가 없다</h4>}
      {isLoading && <h2>로딩중...</h2>}
      {conditionTestString(age)}
      {forTest()}
    </div>
  );
}
