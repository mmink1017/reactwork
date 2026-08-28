import React from "react";
import { testData, exportFunc, members, Category } from "../data/exportData";
export default function D_ExportData() {
  return (
    <div>
      <h3>외부에서 제공하는 데이터가 가져와 사용</h3>
      <p>testData : {testData}</p>
      <p>exportFunc : {exportFunc()}</p>
      <h3>회원조회</h3>
      {members.map((v) => {
        const str = Object.values(v).reduce((p, v) => `${p} ${v}`);
        return <p key={v.userNo}>{str}</p>;
        // return <p>{`${v.userNo} ${v.userId} ${v.userName} ${v.age}`}</p>;
      })}
      <select id="cetegory">
        {Category.map((v, i) => (
          <option key={`${v}_${i}`} value={v}>
            {v}
          </option>
        ))}
      </select>
      <input type="search" />
    </div>
  );
}
