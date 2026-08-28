import React, { useState } from "react";

export default function B_InlineEvent() {
  //   const [value, setValue] = useState("");
  return (
    <div className="flex flex-col space-y-5 items-center p-5">
      <h2>인라인트로 이벤트설정 및 이벤트 객체 이용하기</h2>
      <button
        className="max-w-fit border border-blue-500 p-3 bg-blue-300 rounded-lg"
        onClick={() => {
          alert("클릭했다.");
        }}
      >
        클릭해봐
      </button>
      <label htmlFor="data">데이터</label>
      <input
        id="data"
        className="max-w-fit border rounded-lg"
        type="text"
        onChange={() => {
          console.log("값을 입력함");
        }}
      />
      <h3>이벤트 객체 이용하기</h3>
      <p>js에서 이벤트 핸들러에 전달된 객체와 유사한 객체</p>
      <input
        type="text"
        className="max-w-fit border rounded"
        onChange={(e) => {
          console.log(e);
          console.log(e.target);
          console.log(e.currentTarget);
          console.log(e.target.value);
          //docuement를 이용할 수 있음 -> 권장하지 않음
          e.target.nextElementSibling.innerText = e.target.value;
          //   setValue(e.target.value);
        }}
      />
      <span>{/* {value} */}</span>
    </div>
  );
}
