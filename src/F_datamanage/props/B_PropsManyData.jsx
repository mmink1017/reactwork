import React from "react";

export default function B_PropsManyData(props) {
  return (
    <div className="p-4">
      <h3>prop데이터 출력하기</h3>
      <p>strData : {props.strData}</p>
      <p>numData : {props.numData}</p>
      <p>arrData : {props.arrData}</p>
      <p>objData : {JSON.stringify(props.objData)}</p>
      <p>objData : {Object.entries(props.objData)}</p>
      <table>
        <thead>
          <tr>
            {Object.keys(props.objData).map((k) => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
      </table>
      <p onClick={props.funcData}>클릭해봐</p>
    </div>
  );
}
