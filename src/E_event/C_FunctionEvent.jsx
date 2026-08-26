import React, { useState } from "react";
import { eventHandler, debouncer, trottling } from "@/utils/handlers";
const outerHandler = (setValue) => (e) => {
  console.log(e);
  console.log("외부에 선언한 함수");
  setValue("outerHandler함수가 변경");
};
export default function C_FunctionEvent() {
  const btnStyle = "rounded border border-blue-300 bg-blue-300 p-2 text-white";
  const [value, setValue] = useState("");
  const innerHandler = (e) => {
    console.log(e);
    console.log("내부 선언된 함수 호출");
    setValue("innerHandler함수가 변경");
  };
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2>선언된 함수를 핸들러로 이용하기</h2>
      <ul>
        <li>
          컴포넌트함수 내부선언 : 페이지가 랜더링될 때마다 재선언 됨. state,
          props값을 직접 접근할 수 있음
        </li>
        <li>
          컴포넌트함수 외부선언: 페이지가 랜더링되도 재선언 하지 않음. state,
          props에 직접 접근이 불가능함.
        </li>
      </ul>
      <h3>내부함수 핸들러 등록</h3>
      <button className={btnStyle} onClick={innerHandler}>
        내부함수호출
      </button>
      <h3>외부함수 핸들러 등록</h3>
      <button className={btnStyle} onClick={outerHandler(setValue)}>
        외부함수 호출
      </button>
      <input className={btnStyle} type="text" onChange={eventHandler} />
      <p>{value}</p>
      <button
        className={btnStyle}
        onClick={(e) => {
          eventHandler(e, setValue);
        }}
      >
        매개변수전달함수
      </button>
      <h3>Debouncer이용하기</h3>
      <p>
        지속적으로 발생하는 이벤트를 모두 실행하지 않고 특정 시간 이후에
        마지막으로 발생한 이벤트만 실행
      </p>
      <article className="p-4 flex gap">
        <input
          type="text"
          className="max-w-fit rounded border bg-gray-100 focus:bg-white"
          onChange={debouncer(
            ((e) => {
              console.log(e.target.value);
              e.target.nextElementSibling.innerText = e.target.value;
            },
            500),
          )}
        />
        <span></span>
        <button
          onClick={debouncer((e) => {
            alert("조회하기");
          }, 500)}
        >
          조회하기
        </button>
      </article>
      <h3>Trottling이용하기</h3>
      <p>
        특정시간을 기준으로 주기적으로 실행하는 로직을 구성 - 이벤트에 의해
        데이터를 받아올때(무한스크롤)
      </p>
      <button
        className={btnStyle}
        onClick={trottling(() => {
          console.log("데이터 가져옴");
          alert("데이터 가져옴");
        }, 500)}
      >
        데이터 가져옴
      </button>
      <div
        id="throttling-test"
        style={{ height: "100px", overflow: "auto" }}
        onScroll={trottling(() => {
          console.log("scroll이벤트 발생");
        })}
      >
        All the way up Nuthin’ can stop me, I’m all the way up X2 B.B G, Tae,
        대성이 유행이라지 마 Been there done it Bigbang ‘B.Thxxg’ Be somethin'
        ?! Fan zone ‘뱅봉’ 빛날 희(熙) Everything big big big big WE anything
        big big Everything big big big big That everything big’z me Our own way,
        All the way up 구관이 명관 입이 떡 하니 벌써 20 years, man 스무고개
        Twerk 성인식 적나라하게 World-Tour 끼가 XL 그니까 예술 하지 빅뱅이라
        읽고 써 우주 앰버서더 Would you pick me up? Got a show live on earth
        ‘ㅂ-ㅣ-ㄱ’ 알아서 기어와 우린 같이 따로 놀지 의식 공간도 초월하니 Big
        Shots 살바도르 달리 We like to party after party, No sleep Ohhhh 다들
        밖으로 나와 Go 크게 소리 질러 좋아 마침 오늘 붉은 노을 Yeah we do it
        Yeah we do it Big big big big B.B G, Tae, 대성이 유행이라지 마 Been
        there done it Bigbang ‘B.Thxxg’ Be somethin' ?! Fan zone ‘뱅봉’ 빛날
        희(熙) Everything big big big big WE anything big big Everything big big
        big big That everything big’z me 양자역학 발현 쌍팔년 South-Korean
        맘마미아 깐따삐야 젊음의 도심 한가운데 청춘에 도취한 Boundary Everything
        is big You know that I'm a G 떴다 하면 비행기 썼다 하면 일대기 Name
        everything is BIG 불러 BANG of 아버지 Yeah this is how we do it Gettin’
        down to business, Big genius 우린 같이 따로 놀지 날아다녀 링 나비같이
        Big Shots 무하마드 알리 We like to party after party, No sleep Ohhhh
        하늘 밖으로 나와 Go 크게 멀리 실컷 돌아 나침반은 푸른 노을 Yeah we do it
        Yeah we do it Big big big big B.B G, Tae, 대성이 유행이라지 마 Been
        there done it Bigbang ‘B.Thxxg’ Be somethin' ?! Fan zone ‘뱅봉’ 빛날
        희(熙) Everything big big big big WE anything big big Everything big big
        big big That everything big’z me
      </div>
    </div>
  );
}
