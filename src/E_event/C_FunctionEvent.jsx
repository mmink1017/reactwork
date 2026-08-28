import React, { useState } from "react";
import { eventHandler, debouncer, trottling } from "@/utils/handlers";
const outerHandler = (setValue) => {
  return (e) => {
    console.log(e);
    console.log("외부에 선언한 함수");
    setValue("outerHandler에서 수정");
  };
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
          컴포넌트함수 외부선언 : 페이지가 랜더링되도 재선언 하지 않음. state,
          props에 직접 접근이 불가능함.
        </li>
      </ul>
      <h3>내부함수 핸들러 등록</h3>
      <button className={btnStyle} onClick={innerHandler}>
        내부함수호출
      </button>
      <h3>외부에서 선언한 핸들러 등록</h3>
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
        매개변수 전달함수
      </button>
      <h3>Debouncer이용하기</h3>
      <p>
        지속적으로 발생하는 이벤트를 모두 실행하지 않고 특정 시간 이후에
        마지막으로 발생한 이벤트만 실행 - 입력창 설정
      </p>
      <article className="p-4 flex gap">
        <input
          type="text"
          className="max-w-fit rounded border bg-gray-100 focus:bg-white"
          onChange={debouncer((e) => {
            console.log(e.target.value);
            e.target.nextElementSibling.innerText = e.target.value;
          }, 500)}
        />
        <span></span>
        <button
          onClick={debouncer((e) => {
            alert("조회하기");
          }, 100)}
        >
          조회하기
        </button>
      </article>
      <h3>Throttling이용하기</h3>
      <p>
        특정시간을 기준으로 주기적으로 실행하는 로직을 구성 - 이벤트에 의해
        데이터를 받아올때(무한스크롤)
      </p>
      <button
        className={btnStyle}
        onClick={trottling(() => {
          console.log("데이터 가져옴");
        }, 1000)}
      >
        데이터 가져오기
      </button>
      <div id="throttling-test" style={{ height: "100px", overflow: "auto" }} onScroll={trottling(()=>{
        console.log("scroll이벤트 발생");
      })}>
        [성화] Your name stuck on my tongue No words but say too much Every time
        I wanna go and get gone You stop me with one touch [윤호] 어지러워 너의
        그 미소 눈이 멀어 Stuck in your halo 빠져버려 난 이제 포로 [산] I feel
        like if we go Latina like, like [성화] Curves along her body got the
        people calling it photoshop [산] She'll be going places wake up in Vegas
        nah She don't stop [우영] 홀렸네 막 아득해 나도 몰라 어떡해 네게 빠져
        허우적대 허우적대 허우적대 [여상] She's so BAD BAD BAD BAD BAD BAD BAD
        She's so BAD [종호] Run it all night solo [산] BAD BAD BAD BAD BAD BAD
        BAD She's so BAD [우영] Run it all night solo [민기] Tú me tienes loco,
        toda la noche, loco contigo Wild when you tease, tan lento, ritmo
        peligroso 짜릿해서 난 brr 떨려 넌 향기로운 amiga Bella figura, got that
        peso 미쳐버려 Olé, mi Dios, so BAD [홍중] She way too fine for the room
        But you know that I'm a real VIP member I don't even smoke, I don't, ooh
        But she rollin so classic like a Cohiba Cuban Her voice in my head
        that's all I wanna hear Got me writing poems, in my zone, Shakespeare
        Caught in her web she a spidey 청양고추 Vibe she spicy Fuego [윤호]
        She's so BAD BAD BAD BAD BAD BAD BAD She's so BAD [우영] Run it all
        night solo [민기] BAD BAD BAD BAD BAD BAD BAD She's so BAD [종호] Run it
        all night solo [우영] Yeah, she's so used to all 'em flashes Mona Lisa
        The way she's dancing looking red hot señorita [종호] 난 너만 바래 내가
        찾던 Euphoria 너에게 바치리 나의 La Victoria [성화] She's so BAD [산]
        She's so BAD [윤호] She's so BAD every day Way she's moving up the tempo
        Switching up the pace Love the way she's goin' loco [산] I feel like if
        we go Latina like, like
      </div>
    </div>
  );
}
