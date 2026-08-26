import React from "react";

export default function C_UseControll() {
  const age = 19;
  const msg = "액트 너무 재미있다.";
  const isLoading = false;
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
      {/* {if(age>19){<h4>성인입니다.</h4>}else{<h4>미성년입니다.</h4>}} */}
      {/* {
        switch(age){
            case 19:<h4>19살입니다</h4>;break;
        }
      } */}
      <h3>삼항연산자로 분기처리하기</h3>
      {age > 19 ? <h4>성인입니다.</h4> : <h4>미성년입니다.</h4>}
      <h3>간편연산자 이용하기</h3>
      {msg.includes("리액트") && <h4>리액트가 있다</h4>}
      {msg.includes("리액트") || <h4>리액트가 없다</h4>}
      {isLoading && <h2>로딩중.....</h2>}
      <h4>{conditionTestString(age)}</h4>
      {/* {for(let i=0;i<10;i++){}} */}
      {forTest(10)}
    </div>
  );
}
