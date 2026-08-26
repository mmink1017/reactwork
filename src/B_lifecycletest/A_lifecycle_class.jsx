import React, { Component } from "react";

export default class A_lifecycle_class extends Component {
  constructor() {
    super();
    this.state = {
      checkVal: "check!",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  //생성주기 함수 선언하기
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(`getDerivedStateFromProps함수 호출`);
  //   }
  componentDidMount() {
    //컴포넌트가 마운트된 후 실행하는 함수
    console.log(`componentDidMount함수 호출`);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //컴포넌트 내부의 값이 변경됐을때
    console.log(`componentDidUpdate함수 호출`);
    console.log(`state : ${prevState}`);
  }
  componentWillUnmount() {
    //컴포넌트가 페이지에서 사라졌을때
    console.log(`componentWillUnmount함수 호출`);
  }
  clickHandler() {
    this.setState((preState) => {
      return { checkVal: preState.checkVal + "1" };
    });
  }
  render() {
    console.log("render함수 호출");
    return (
      <div>
        <h2>클래스형 컴포넌트 라이프사이클</h2>
        <button onClick={this.clickHandler}>state변경</button>
        <h3>{this.state.checkVal}</h3>
      </div>
    );
  }
}
