import React from "react";
import clsx from "clsx";

import A_BasicProps from "./props/A_BasicProps";
import A_BasicProps2 from "./props/A_BasicProps2";
import B_PropsManyData from "./props/B_PropsManyData";
import B_PropsManyData2 from "./props/B_PropsManyData2";
import C_StyleProps from "./props/C_StyleProps";
import C_StyleClassTest from "./props/C_StyleClassTest";
import D_ChildrenProp from "./props/D_ChildrenProp";
import D_ChildrenJsxProps from "./props/D_ChildrenJsxProps";
import CommonContainer from "./props/sample/CommonContainer";
export default function PropsContainer() {
  const strData = "문자열 데이터";
  const numData = 19;
  const arrData = [1, 2, 3, 4, 5];
  const objData = { name: "유병승", age: 19, gender: "남" };
  const funcData = () => {
    alert("props전달된 함수");
  };
  const myStyle = {
    fontSize: "30px",
    fontWeight: "bolder",
    color: "lime",
  };
  const myClassStyle = "text-3xl text-lime-200";
  const myClassStyleArr = [
    "text-center",
    "bg-gradient-to-r from-lime-500 to-white",
    "w-fit",
  ];
  const isDark = true;
  const clsxTest = clsx(isDark && "text-yellow-500", {
    "bg-black": isDark,
    "bg-white": !isDark,
    "text-2xl": true,
    "font-bold": true,
  });

  return (
    <div>
      <h2>prop데이터 이용하기</h2>
      <p>
        부모 컴포넌트에서 자식컴포넌트에 필요한 데이터를 태그 속성 방식으로
        전달하는 것
      </p>
      <A_BasicProps title="prop데이터 전달" />
      <A_BasicProps2 title="금요일 집중 잘 되죠?" />
      <h3 className="text-xl">
        자식 컴포넌트에 다수의 지역변수의 값을 전달하기
      </h3>
      <B_PropsManyData
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
      />
      <B_PropsManyData2
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
      />
      <h3>스타일 설정을 props전달하기</h3>
      <C_StyleProps myStyle={myStyle} text="점심 맛있게 먹었어요?" />
      <C_StyleProps myStyle={{ ...myStyle, color: "red" }} text="참 쉽네~" />
      <C_StyleClassTest styleClass={myClassStyle} />
      <C_StyleClassTest styleClass={myClassStyleArr.join(" ")} />
      <C_StyleClassTest
        styleClass={clsx([...myClassStyleArr, "text-3xl", "text-white"])}
      />
      <C_StyleClassTest styleClass={clsxTest} />
      <h2>컴포넌트의 children 가져오기</h2>
      <p>
        컴포넌트의 시작태그와 끝태그 사이에 있는 값 props.children 속성으로
        가져올 수 있다.
      </p>
      <D_ChildrenProp>수업 잘 듣고 있죠?</D_ChildrenProp>
      <p>다른 타입데이터 전달</p>
      <D_ChildrenProp>{19}</D_ChildrenProp>
      <D_ChildrenProp>{arrData}</D_ChildrenProp>
      <D_ChildrenProp>{objData}</D_ChildrenProp>
      <h3 className="text-2xl font-bold">jsx태그 자식으로 전달</h3>
      <D_ChildrenJsxProps>
        <p>나는 jsx야!</p>
      </D_ChildrenJsxProps>
      <D_ChildrenJsxProps>
        <span class="text-coral-500">나는 span</span>
        <p className={clsxTest}>나는 p야</p>
        <p className={clsxTest}>나는 p2야</p>
      </D_ChildrenJsxProps>

      <hr />
      <CommonContainer />
    </div>
  );
}
