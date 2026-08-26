import React from "react";

export default function B_PropsManyData2({
  strData,
  numData,
  arrData,
  objData,
  funcData,
}) {
  return (
    <div>
      <p>{strData}</p>
      <p>{numData}</p>
      <p>{arrData}</p>
      <p>{JSON.stringify(objData)}</p>
      <p onClick={funcData}>클릭해봐</p>
    </div>
  );
}
