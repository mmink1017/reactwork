import React, { useState } from "react";
import ButtonComponent from "../props/sample/ButtonComponent";
import { debouncer } from "../../utils/handlers";
export default function B_StateObject() {
  const [arrData, setArrData] = useState([1, 2, 3]);
  const [objData, setObjData] = useState({});
  const addArrData = (e) => {
    // arrData.push(100);
    // console.log(arrData);
    setArrData([...arrData, 100]);
  };
  const changeName = (e) => {
    const name = e.target.value;
    setObjData({ ...objData, userName: name });
  };
  const changeAge = (e) => {
    const age = e.target.value;
    setObjData({ ...objData, age: age });
  };
  const changeEmail = (e) => {
    const email = e.target.value;
    setObjData({ ...objData, email: email });
  };
  const changeAddress = (e) => {
    const address = e.target.value;
    setObjData({ ...objData, address: address });
  };
  const changeActive = (e) => {
    const isActice = e.target.value;
    setObjData({ ...objData, isActive: isActice });
  };
  const changeObj = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjData({ ...objData, [name]: value });
  };

  const [count, setCount] = useState(0);
  const incrementCount = (e) => {
    setCount((pre) => {
      return pre + 1;
    });
    setCount((pre) => pre + 1);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold m-2">
        객체, 배열 데이터를 state로 이용하기
      </h3>
      <h4 className="text-lg font-bold m-2">배열 데이터 출력</h4>
      <p>{arrData.length === 0 ? "배열 데이터 없음" : arrData}</p>
      <ButtonComponent
        size="small"
        type="primary"
        isOutline={true}
        clickHandler={addArrData}
      >
        배열값추가
      </ButtonComponent>
      <h4 className="text-lg font-bold m-2">
        input태그에 입력된 값을 배열에 추가하기
      </h4>
      <input
        type="text"
        className="rounded p-2 m-2 border"
        // onKeyUp={(e) => {
        //   console.log(e.code);
        //   if (e.code === "Enter") {
        //     setArrData([...arrData, e.target.value]);
        //   }
        // }}
        onChange={debouncer((e) => {
          (setArrData([...arrData, e.target.value]), 500);
        })}
      />
      <ul>
        {arrData.map((v, i) => (
          <li key={`${v}_${i}`}>{v}</li>
        ))}
      </ul>
      {/* 배열에 저장된 값을 리스트로 출력 */}

      <h4 className="text-lg font-bold m-2">객체 데이터 출력하기</h4>
      {/* 리스트로 key - value 출력하기 */}
      {Object.keys(objData).length !== 0 ? (
        <ul>
          {Object.entries(objData).map(([key, value]) => {
            return (
              <li key={key}>
                {key} {value}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>객체 데이터가 없습니다.</p>
      )}
      {/* 이름, 나이 주소, email, isActive(true,false)를 입력 받아 수정하기 */}
      <input
        type="text"
        placeholder="이름입력"
        name="userName"
        className="rounded p-2 m-2 border"
        onChange={changeName}
      />
      <input
        type="number"
        placeholder="나이입력"
        name="age"
        className="rounded p-2 m-2 border"
        min="0"
        onChange={changeAge}
      />
      <input
        type="text"
        placeholder="주소입력"
        name="address"
        className="rounded p-2 m-2 border"
        onChange={changeAddress}
      />
      <input
        type="email"
        placeholder="이메일입력"
        name="email"
        className="rounded p-2 m-2 border"
        onChange={changeEmail}
      />
      <label htmlFor="active">활성화</label>
      <input
        type="radio"
        id="active"
        name="isActive"
        value={true}
        onChange={changeActive}
      />
      <label htmlFor="unActive">비활성화</label>
      <input
        type="radio"
        id="unActive"
        name="isActive"
        value={false}
        onChange={changeActive}
      />
      <h4 className="text-lg font-bold m-2">하나의 이벤트 핸들러로 처리하기</h4>
      <input
        type="text"
        placeholder="이름입력"
        name="userName"
        className="rounded p-2 m-2 border"
        onChange={changeObj}
      />
      <input
        type="number"
        placeholder="나이입력"
        name="age"
        className="rounded p-2 m-2 border"
        min="0"
        onChange={changeObj}
      />
      <input
        type="text"
        placeholder="주소입력"
        name="address"
        className="rounded p-2 m-2 border"
        onChange={changeObj}
      />
      <input
        type="email"
        placeholder="이메일입력"
        name="email"
        className="rounded p-2 m-2 border"
        onChange={changeObj}
      />
      <label htmlFor="active">활성화</label>
      <input
        type="radio"
        id="active"
        name="isActive"
        value={true}
        onChange={changeObj}
      />
      <label htmlFor="unActive">비활성화</label>
      <input
        type="radio"
        id="unActive"
        name="isActive"
        value={false}
        onChange={changeObj}
      />
      <h4 className="text-xl font-bold m-2">이전값 활용하기</h4>
      <h4 className="text-lg font-bold m-2">{count}</h4>
      <ButtonComponent
        type="secondary"
        size="small"
        clickHandler={incrementCount}
      >
        증가
      </ButtonComponent>
    </div>
  );
}
