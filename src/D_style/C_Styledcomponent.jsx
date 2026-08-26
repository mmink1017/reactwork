import React from "react";
import styled from "styled-components";
import D_StyledComponentProp from "./D_StyledComponentProp";
export default function C_Styledcomponent() {
  // 기본적용하기
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 16px;
    border: 1px solid orange;
    border-radius: 8px;
  `;
  const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: lightgray;
    margin: 0;
  `;

  //스타일 재사용하기
  //styled(컴포넌트)`스타일설정`
  const ContainerRight = styled(Container)`
    justify-content: flex-end;
    border-color: lime;
    background-color: lightgreen;
    height: 80px;
  `;
  const TitleSample = styled(Title)`
    color: white;
    font-weight: bold;
  `;

  const OtherComponent = styled(D_StyledComponentProp)`
    font-size: 20px;
    background-color: tomato;
    color: white;
    border: 2px dotted lime;
    border-radius: 4px;
    padding: 10px;
    margin: 8px;
  `;

  //가상선택자를 이용해서 중복스타일설정
  const InteractiveButton = styled.button`
    background-color: lightblue;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    margin: 8px 4px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: darkblue;
    }
    &:active {
      background-color: blue;
    }
  `;
  const Badge = styled.span`
    diplay: inlin-block;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 8px;
    margin: 4px;
    background-color: ${(props) => {
      if (props.$variant === "primary") return "#4dabf7";
      if (props.$variant === "success") return "#51cf66";
      if (props.$variant === "danger") return "red";
      return "lightgray";
    }};
    color: ${(props) => {
      return props.$variant ? "white" : "black";
    }};
  `;
  return (
    <div>
      <h2>styledcomponents라이브러리 이용하기</h2>
      <p>
        styled모듈을 가져와서 컴포넌트를 생성 후 사용 적용방식 :
        styled.태그명`style속성설정` 컴포넌트가 리턴됨.
      </p>
      <Container>기본 컨테이너 영역</Container>
      <Title>기본타이틀</Title>
      <Container>
        <Title>Conatiner 내부의 타이틀</Title>
      </Container>
      <h2>style 재사용하기</h2>
      <ContainerRight>
        <Title>재사용 컨테이너에 넣기</Title>
        <TitleSample>타이틀 재정의</TitleSample>
      </ContainerRight>
      <h2>내가 만든 컴포넌트에 스타일 적용</h2>
      <p>
        styled을 설정하면 class속성이 컴포넌트에 전달됨 - 클래스를 적용하면
        스타일이 설정
      </p>
      <OtherComponent />

      <InteractiveButton>버튼</InteractiveButton>
      <h3>전달된 데이터에 따라 스타일 분기처리하기</h3>
      <p>속성으로 전달된 데이터로 스타일을 분기처리</p>
      <Badge>기본</Badge>
      <Badge $variant="primary">primary</Badge>
      <Badge $variant="success">success</Badge>
      <Badge $variant="danger">danger</Badge>
    </div>
  );
}
