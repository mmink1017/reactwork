import React, { useReducer } from "react";
import { memberData, memberReducer } from "../reducers/reducer";
import ButtonComponent from "../../F_datamanage/props/sample/ButtonComponent";
export default function ReducerMemberContainer() {
  const [state, dispatch] = useReducer(memberReducer, memberData);
  const changeMember = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADD", name: name, payload: value });
    // dispatch({type:"ADD",payload:{name:name,value:value}});
  };
  return (
    <div>
      <h3>회원데이터 관리</h3>
      <div className="flex flex-col gap-2 p-3">
        {Object.keys(memberData).map((key) => {
          return (
            <label key={key}>
              {key}{" "}
              <input
                className="border rounded"
                type={key == "password" ? "password" : "text"}
                name={key}
                value={state[key]}
                onChange={changeMember}
              />
            </label>
          );
          // return key === "password" ? (
          //   <input type="password" name={key} onChange={changeMember} />
          // ) : (
          //   <input type="text" name={key} onChange={changeMember} />
          // );
        })}
      </div>
      <div>
        <h3>저장된 회원정보</h3>
        {Object.entries(state).map(([key,value])=>{
          return(
            <p key={key}>{key} {value}</p>
          );
        })}
      </div>
      <ButtonComponent type="primary" clickHandler={()=>{dispatch({type:"RESET", name:"", payload:""});}}>초기화</ButtonComponent>
    </div>
  );
}
