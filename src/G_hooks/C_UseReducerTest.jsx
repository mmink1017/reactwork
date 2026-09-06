import React from 'react'
import C_ReducerCounterCom from './reducercomponents/C_ReducerCounterCom'

export default function C_UseReducerTest() {
  return (
    <div>
        <h3 className="text-xl font-bold">useReducer()이용하기</h3>
        <p>데이터의 상태를 관리하기 위한 hook useState()=간단 데이터를 처리할 때 사용</p>
        <p>useReducer()=복잡한 데이터를 관리할 때 사용 * redux라이브러리와 데이터 처리 구조가 유사</p>
        <h4>useReducer()처리 구조</h4>
        <p>dispatch(action함수)-reducer(state,action)-새 state를 반환 -페이지 리랜더링</p>
        <ol>
            <li>
                Reducer함수를 생성<br/>
                요청하는 내용에 따라 새로운 상태를 생성해주는 함수 -state변경<br/>
                상태값은 action의 타입에 따라 수정, 초기화, 추가한다<br/>
            </li>
            <li>
                useReducer()함수로 reducer를 이용<br/>
            </li>
        </ol>
        <C_ReducerCounterCom/>
    </div>
  )
}
