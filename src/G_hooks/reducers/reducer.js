import { act } from "react";

//숫자를 증가, 감소, 초기화 하는 reducer함수를 선언하기
export const counterReducer=function(state,action){
    //state 저장된 값(관리하고 있는 상태 값)
    //action의 type은 특정 기능을 지정하는 데이터
    switch(action.type){
        case "INCREMENT": return state+1;
        case "DECREMENT": return state-1;
        case "INIT": return 0;
        default:
            return state;
    }
}
export const memberData={
    userId:"",
    password:"",
    userName:"",
    email:"",
}
export const memberReducer=(state,action)=>{
    switch(action.type){
        case "ADD": return{...state,[action.name]:action.payload}
        case "RESET":return memberData; default: return state;
    }
};

