import React, { useState } from "react";
import ButtonComponent from "../props/sample/ButtonComponent";

export default function A_BasicState() {
  const [strData, setStrData] = useState("초기값");
  const [numData, setNumData] = useState(10);
  return (
    <div>
      <h3 className="text-xl font-bold mx-2 my-2">
        함수형 컴포넌트에서 state이용하기
      </h3>
      <p>
        리액트에서 제공하는 함수를 이용
        {/* useState()함수 - 배열로 값,값을 수정할 수 있는 함수반환 ==[값,함수] */}
      </p>
      <p>
        strData : {strData}
        {typeof strData}
      </p>
      <p>
        numData : {numData} {typeof numData}
      </p>
      <h4 className="text-lg font-bold m-2">데이터 수정하기</h4>
      <p>
        set메소드를 이용해서 수정 매개변수로 전달된 값으로 덮어쓰기함. 함수를
        매개변수로 선언했을때 set메소드에서 반환하는 값으로 변수를 덮어쓰기함.
      </p>
      <ButtonComponent
        size="small"
        type="secondary"
        clickHandler={() => {
          setStrData("여러분 방학이 끝나가요");
        }}
      >
        수정하기
      </ButtonComponent>
      <ButtonComponent
        size="small"
        type="warn"
        clickHandler={() => {
          setNumData(100);
        }}
      >
        100으로 수정
      </ButtonComponent>
      {[10, 20, 30, 40, 50].map((value, index) => {
        return (
          <ButtonComponent
            type="danger"
            size="small"
            clickHandler={() => {
              setNumData(value);
            }}
          >
            {value}로 수정
          </ButtonComponent>
        );
      })}
      <input
        type="text"
        className="rounded border p-2 m-2"
        onChange={(e) => {
          setStrData(e.target.value);
        }}
      />
      <h3 className="text-xl font-bold mx-2 my-2">{strData}</h3>
    </div>
  );
}
