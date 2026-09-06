import React, {useReducer} from "react";
// import A_UseRefTest from "./A_UseRefTest";
// import NonUseMemoTest from "./child/NonUseMemoTest";
// import C_UseReducerTest from "./C_UseReducerTest";
// import { counterReducer } from "./reducers/reducer";
// import ReducerMemberContainer from "./reducercomponents/ReducerMemberContainer";
import D_CustomHook from "./D_CustomHook";
import E_ExtraHook from "./E_ExtraHook";

export default function HooksContainer() {
  return (
    <div>
      <h3 className="text-xl font-bold">hook이용하기</h3>
      <p>
        함수형 컴포넌트에서 리액트의 기능을 손쉬게 사용할 수 있게 해주는 함수
        useState, useEffect, useContext useRef, useMemo, useReducer, customhook
        ....
      </p>
      {/* <C_UseReducerTest/>
      <ReducerMemberContainer/> */}
      {/* <D_CustomHook/> */}
      <E_ExtraHook/>
    </div>
  );
}
