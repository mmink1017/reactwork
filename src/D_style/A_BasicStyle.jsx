import React from "react";
import "../assets/css/basicStyle.css";
// 인라인 방식으로 스타일 적용하기
export default function A_BasicStyle() {
  const basicStyle = {
    backgroundColor: "magenta",
    color: "lime",
    fontSize: "30px",
    width: "200px",
    height: "100px",
  };
  return (
    <div>
      <h2>인라인으로 스타일 적용하기</h2>
      <p>jsx의 style속성에 css설정 객체를 대입</p>
      <div>일반 div태그</div>
      <div style={{ backgroundColor: "blue", width: "200px", height: "80px" }}>
        인라인방식으로 적용
      </div>
      <div style={basicStyle}>basicStyle적용</div>
      <div style={{ ...basicStyle, width: "100%" }}>
        basicStyle 부분수정해서{" "}
      </div>
      <h3>css파일로 설정된 스타일 적용하기</h3>
      <p>assets폴더에 *.css파일을 생성하고 import로 가져와 사용</p>
      <span className="basic">외부 css파일로 스타일 적용하기</span>
      <h3 className="title">스타일 적용하기</h3>
    </div>
  );
}
