import React from "react";
//클래스형 컴포넌트
export default class A_ClassComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return React.createElement("h2", null, "나의 첫 클래스 컴포넌트");
  }
}
// export default A_ClassComponent;
