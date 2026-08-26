import React from "react";
//부모컴포넌트에거 전달한 props데이터 받기
//함수형 컴포넌트에서 첫번째 매개변수에 객체로 전달됨.
export default function A_BasicProps(props) {
  console.log(props);
  const changeProps = (e) => {
    //props 데이터는 readonly로 수정이 불가능!
    props.title = "새로운 값 넣기";
    console.log(props.title);
  };
  return (
    <div className="p-5">
      <h3 className="text-xl">함수형 컴포넌트에서 props값 이용</h3>
      <p>전달된 title : {props.title}</p>
      <button onClick={changeProps}>prop데이터 변경</button>
    </div>
  );
}
