import React from "react";
const testData = "점심 굿";
//jsx에서 자바스크립트 이용하기
export default function B_UseJavscript() {
  const name = "유병승";
  let age = 19;
  const height = [180.5, 172.3, 166.2, 153.2, 188.3, 174.2];
  const person = {
    name: "허윤준",
    age: 26,
    gender: "여",
    address: "경기도 양주",
  };
  const students = [
    { name: "홍길동", grade: 1, classNum: 1, gender: "남" },
    { name: "홍길은", grade: 1, classNum: 1, gender: "여" },
    { name: "홍길금", grade: 2, classNum: 2, gender: "여" },
    { name: "이순신", grade: 3, classNum: 2, gender: "남" },
    { name: "대장금", grade: 2, classNum: 1, gender: "여" },
  ];
  const makeHeader = (headers = []) => {
    if (Headers.lenght == 0) {
      throw new Error("배열의 길이가 1개 이상이여야 합니다.");
    }
    return headers.map((head) => <th>{head}</th>);
  };
  return (
    <div>
      <h2>변수출력하기</h2>
      <h4>이름 : {name}</h4>
      <h4>나이 : {age}</h4>
      {/* 배열출력하기 */}
      <h4>키 : {height}</h4>
      <h4>
        윤준 : {person.name} {person.age} {person.gender} {person.address}
      </h4>
      {/* 배열에 있는 값을 list로 출력하기 */}
      <ul>
        <li>{height[0]}</li>
        <li>{height[1]}</li>
        <li>{height[2]}</li>
        <li>{height[3]}</li>
        <li>{height[4]}</li>
      </ul>
      {/* 객체의 값을 리스트로 출력하기 */}
      <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.gender}</li>
        <li>{person["address"]}</li>
      </ul>
      <h3>배열함수 이용해서 출력하기</h3>
      <p>map, reduce 함수를 이용</p>
      <ul>
        {height.map((v, i) => (
          <li>{v}</li>
        ))}
      </ul>
      <h3>객체 값 출력하기</h3>
      <ul>
        {Object.values(person).map((v, i) => (
          <li>{v}</li>
        ))}
      </ul>
      <h3>키가 170이상인 값만 출력하기</h3>
      <p>p태그로 출력</p>
      {height
        .filter((v) => v >= 170)
        .map((v) => (
          <p>{v}</p>
        ))}

      <h3>테이블로 전체 students출력하기</h3>
      <table>
        <tr>
          {/* {Object.keys(students[0]).map((v) => (
            <th>{v}</th>
          ))} */}
          {makeHeader(Object.keys(students[0]))}
        </tr>
        {students.map((student) => {
          return (
            <tr>
              {Object.values(student).map((v) => (
                <td>{v}</td>
              ))}
              {/* <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.classNum}</td>
              <td>{student.gender}</td> */}
            </tr>
          );
        })}
      </table>
      <h3>테이블로 여학생만 출력하기</h3>
      <table>
        <tr>
          {/* {["이름", "학년", "반", "성별"].map((v) => (
            <th>{v}</th>
          ))} */}
          {makeHeader(["이름", "grade", "반", "gender"])}
        </tr>
        {students
          .filter((v) => v.gender == "여")
          .map((student) => {
            return (
              <tr>
                {Object.values(student).map((v) => (
                  <td>{v}</td>
                ))}
              </tr>
            );
          })}
      </table>
      <h3>외부선언된 데이터 가져오기</h3>
      <p>{testData}</p>
      <h3>지역변수 값 변경하기</h3>
      <button
        onClick={() => {
          age++;
          console.log(age);
        }}
      >
        먹기{age}
      </button>
    </div>
  );
}
