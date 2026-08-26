import React from "react";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import AvartaComponent from "./AvartaComponent";
import TableComponent from "./TableComponent";
import { members, boards, products } from "@/data/exportData";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyComponent from "./TableBodyComponent";
export default function CommonContainer() {
  return (
    <div>
      {/* <TextComponent text="나의 첫 컴포넌트" /> */}
      <TextComponent size="large" variant="muted">
        내가 만든 컴포넌트
      </TextComponent>
      {/* ButtonComponent만들기
        primary(블루) secondary(green) warn(yellow) danger(red)
        size : small medium large
        배경색이 있는 버튼, 배경색 없이 경계선만 있는 버튼
        이벤트처리
      */}
      <ButtonComponent>기본버튼</ButtonComponent>
      <ButtonComponent type="primary" size="small" isOutline={true}>
        primary-small
      </ButtonComponent>
      <ButtonComponent type="primary" size="small" isOutline={false}>
        primary-small
      </ButtonComponent>
      <ButtonComponent
        type="secondary"
        size="medium"
        clickHandler={(e) => {
          alert("클릭");
        }}
      >
        primary-small
      </ButtonComponent>
      <div className="m-4 grid lg:grid-cols-5 sm:grid-cols-3 gap-10">
        <CardComponent title="첫번째 카드">첫번째 카드 레이아웃</CardComponent>
        <CardComponent
          title="짱구 피규어"
          imgSrc="https://m.comics-art.co.kr/web/product/big/202310/65581d8940904128d8cab3ae2056721f.jpg"
        >
          <h3>짱구 피규어 팝니다.</h3>
          <span>150,000원</span>
          <div className="flex">
            <AvartaComponent
              src="https://i.namu.wiki/i/W-8JxgWa93-SsdRCjubwHVUxl3jOQf0HxXvG-R_5r-PJo5pdDr0tnj0HhcstJz5wddfBFdbzk5abu7xtHAzYMQ.webp"
              alt="신주혁"
              size="50"
            />
            <p>판매자 : 신주혁</p>
          </div>
          <ButtonComponent size="small" type="primary">
            구매하기
          </ButtonComponent>
        </CardComponent>
      </div>
      <TableComponent data={members} />
      <table>
        <TableHeaderComponent header={Object.keys(boards[0])} />
        <TableBodyComponent bodyData={boards} />
      </table>
    </div>
  );
}
