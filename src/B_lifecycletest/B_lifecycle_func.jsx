import { useEffect, useState } from "react";

export default function B_lifecycle_func() {
  const [data, setData] = useState("초기값");
  const [data2, setData2] = useState(1);
  useEffect(() => {
    //페이지 리랜더링시 무조건 실행
    console.log("useEffect()함수 실행");
  });
  useEffect(() => {
    //한번만 실행하는 함수 -> componentDidMount()동일
    //페이지 초기설정
    console.log("최초 한번만 실행 - 최초 랜더링 시");
  }, []);
  useEffect(() => {
    //data변수의 값이 변경될때 마다 실행 -> componentDidUpdate()동일
    console.log(`data값 변경 : ${data}`);
  }, [data]);
  return (
    <div>
      <h2>함수형 컴포넌트 라이프사이클</h2>
      <p>useEffect() hooks를 이용</p>
      <h3>데이터 : {data}</h3>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        수정
      </button>
      <h3>data2 : {data2}</h3>
      <button
        onClick={() => {
          setData2(100);
        }}
      >
        증가
      </button>
    </div>
  );
}
