import React, { useState } from "react";

export default function Ex_StateObject() {
  const [memberList, setMemberList] = useState([]);
  const [memberData, setMemberData] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    gender: "",
  });
  const addmamber = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMemberData({ ...memberData, [name]: value });
  };

  const memberSubmit = (e) => {
    e.preventDefault();

    setMemberList([...memberList, memberData]);

    setMemberData({
      id: "",
      pw: "",
      name: "",
      email: "",
      gender: "",
    });
  };
  return (
    <div className="p-4">
      <form onSubmit={memberSubmit}>
        <input
          className="rounded p-2 m-2 border"
          type="text"
          name="id"
          placeholder="id"
          value={memberData.id}
          onChange={addmamber}
        />
        <input
          className="rounded p-2 m-2 border"
          type="text"
          name="pw"
          placeholder="pw"
          value={memberData.pw}
          onChange={addmamber}
        />
        <input
          className="rounded p-2 m-2 border"
          type="text"
          name="name"
          placeholder="name"
          value={memberData.name}
          onChange={addmamber}
        />
        <input
          className="rounded p-2 m-2 border"
          type="text"
          name="email"
          placeholder="email"
          value={memberData.email}
          onChange={addmamber}
        />
        <input
          className="rounded p-2 m-2 border"
          type="text"
          name="gender"
          placeholder="gender"
          value={memberData.gender}
          onChange={addmamber}
        />

        <button className="font-bold rounded-md px-2 py-2 border" type="submit">
          등록
        </button>
      </form>
      <h2 className="text-xl font-bold m-2">전체 회원</h2>
      {/* <table className="m-8 p-8 border">
        <thead>
          <tr className="m-8 m-8 border">
            {Object.entries(memberData).map(([key]) => {
              return (
                <th className="border" key={key}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(memberData).map(([key, value]) => {
              return (
                <td className="border" key={key}>
                  {value}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table> */}
      <table className="m-8 p-8 border text-center">
        <thead>
          <tr className="border bg-gray-100">
            {Object.keys(memberData).map((key) => (
              <th className="border p-2" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {memberList.length != 0 ? (
            <tr>
              <td colSpan="5" className="border p-2">
                등록된 회원이 없습니다.
              </td>
            </tr>
          ) : (
            memberList.map((member, index) => (
              <tr key={index} className="border">
                {Object.keys(member).map((key) => (
                  <td className="border p-2" key={key}>
                    {member[key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
