import React from "react";
import "../assets/css/nomodule.css";
import header from "../assets/css/header.module.css";
import footer from "../assets/css/footer.module.css";
export default function B_ModuleTest() {
  console.log(header);
  console.log(footer);
  return (
    <div>
      <h3 className="title">모듈 스타일 적용하기</h3>
      <p>같은 클래스를 사용하면 덮어쓰기가 됨.</p>
      <h3>모듈 스타일을 이용해서 컴포넌트에서만 사용하기</h3>
      <div className={header.container}>header.container적용</div>
      <h3 className={header.title}>header title 적용한 제목</h3>
      <div className={footer.container}>
        footer
        <h3 className={footer.title}>2026</h3>
      </div>
      <h3>모듈 스타일 여러개 적용하기</h3>
      <div
        className={[header.container, footer.container, footer.title].join(" ")}
      >
        여러개 스타일 적용하기
      </div>
    </div>
  );
}
