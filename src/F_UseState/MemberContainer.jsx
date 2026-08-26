import React, { useState } from "react";

import TableHeaderComponent from "../F_datamanage/props/sample/TableHeaderComponent";
import TableBodyComponent from "../F_datamanage/props/sample/TableBodyComponent";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";
const inputStyle = "border border-gray-300 p-1 rounded";
//아이디, 비밀번호, 이름, 이메일, 성별
export default function MemberContainer() {
  const [members, setMembers] = useState([
    {
      id: "hong12",
      password: "Password1!",
      name: "홍길동",
      email: "hong12@example.com",
      gender: "M",
    },
    {
      id: "kimcs",
      password: "Secret#99",
      name: "김철수",
      email: "kimcs@test.co.kr",
      gender: "M",
    },
    {
      id: "leeYH",
      password: "Pass@2026",
      name: "이영희",
      email: "yh.lee@domain.com",
      gender: "F",
    },
    {
      id: "parkMJ",
      password: "Test*777",
      name: "박민정",
      email: "minjung@sample.org",
      gender: "F",
    },
    {
      id: "choiDH",
      password: "Master$5",
      name: "최동현",
      email: "dh_choi@naver.com",
      gender: "M",
    },
    {
      id: "jungSY",
      password: "User#1234",
      name: "정서연",
      email: "seoyeon@gmail.com",
      gender: "F",
    },
    {
      id: "kangJW",
      password: "Security!1",
      name: "강지우",
      email: "jw_kang@daum.net",
      gender: "M",
    },
    {
      id: "choEJ",
      password: "Check*888",
      name: "조은지",
      email: "eunji.cho@kakao.com",
      gender: "F",
    },
    {
      id: "yoonSH",
      password: "Access^55",
      name: "윤서준",
      email: "seojun@company.com",
      gender: "M",
    },
    {
      id: "limHA",
      password: "Login&333",
      name: "임하은",
      email: "haeun_lim@web.net",
      gender: "F",
    },
  ]);
  const [member, setMember] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    gender: "",
  });
  const [validatorMessage, setValidatorMessage] = useState({
    result: false,
    message: "",
  });
  const newMember = (e) => {
    // setValidatorMessage({ result: false, message: "" });
    // const key=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    const result = validator(name, value);
    setValidatorMessage(result);
    if (result.result) setMember((prev) => ({ ...prev, [name]: value }));
  };
  const validator = (name, value) => {
    const passwordReg =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    const result = {};
    switch (name) {
      case "id":
        result.result = !(
          members.some((m) => m.id == value) || value.length <= 4
        );
        break;
      case "pw":
        result.result = passwordReg.test(value);
        break;
      default:
        result.result = true;
    }
    result.message = result.result
      ? ""
      : `${name}값이 정해진 규칙에 위배됩니다.`;
    return result;
  };
  const [searchData, setSearchData] = useState({});
  const [searchMembers, setSearchMembers] = useState([]);

  const changeSearchData = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(searchData);
  };
  const searchBtn = (e) => {
    const searchResult = members.filter((member) => {
      return member[searchData.category].includes(searchData.keyword);
    });
    // console.log(searchResult);
    setSearchMembers(searchResult);
  };
  return (
    <>
      <div className="m-2 p-2 border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold">회원정보</h2>
        {members.length != 0 ? (
          <>
            <div>
              <select
                className={inputStyle}
                name="category"
                onChange={changeSearchData}
              >
                <option disabled value="" selected>
                  선택
                </option>
                {Object.keys(members[0]).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <input
                className={inputStyle}
                type="text"
                name="keyword"
                onChange={changeSearchData}
              />
              <ButtonComponent
                type="secondary"
                size="small"
                clickHandler={searchBtn}
              >
                검색
              </ButtonComponent>
            </div>
            <table>
              <TableHeaderComponent
                header={["아이디", "비밀번호", "이름", "이메일", "성별"]}
              />
              <TableBodyComponent
                bodyData={
                  searchMembers.length > 0 && searchData.keyword
                    ? searchMembers
                    : members
                }
              />
            </table>
          </>
        ) : (
          <p>등록된 회원이 없습니다.</p>
        )}
      </div>
      <div className="flex flex-col items-center gap-2 m-2 p-2 border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold">회원등록</h2>
        <div className="flex gap-2 items-center">
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            name="id"
            placeholder="아이디 입력"
            id="id"
            className={inputStyle}
            onChange={newMember}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="pw"
            placeholder="비밀번호 입력"
            id="pw"
            className={inputStyle}
            onChange={newMember}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            id="name"
            className={inputStyle}
            onChange={newMember}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            placeholder="이메일 입력"
            id="email"
            className={inputStyle}
            onChange={newMember}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="gender1">남</label>
          <input
            type="radio"
            name="gender"
            id="gender1"
            className={inputStyle}
            value="M"
            onChange={newMember}
          />
          <label htmlFor="gender2">여</label>
          <input
            type="radio"
            name="gender"
            id="gender2"
            className={inputStyle}
            value="F"
            onChange={newMember}
          />
        </div>
        {/* {validatorMessage.result && ( */}
        <ButtonComponent
          type="primary"
          size="medium"
          disabled={!validatorMessage.result}
          clickHandler={(e) => {
            console.log(member);
            console.log(members);
            if (validatorMessage.result) {
              setMembers((prev) => [...prev, member]);
            }
          }}
        >
          저장
        </ButtonComponent>
        {/* )} */}
        <span>{validatorMessage.message}</span>
      </div>
    </>
  );
}
