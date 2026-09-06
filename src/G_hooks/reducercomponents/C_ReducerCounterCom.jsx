import React,{useReducer} from 'react'
import ButtonComponent from '../../F_datamanage/props/sample/ButtonComponent'
import { counterReducer } from '../reducers/reducer'
export default function C_ReducerCounterCom() {
    const [state,dispatch]=useReducer(counterReducer,0);
  return (
    <div>
        <h3 className='text-xl font-bold'>리듀서를 이용한 카운트페이지</h3>
        <h4 className='text-lg font-bold'>{state}</h4>
        <ButtonComponent type="primary" clickHandler={()=>{dispatch({type:"INCREMENT"})}}>증가</ButtonComponent>
        <ButtonComponent type="danger" clickHandler={()=>{dispatch({type:"DECREMENT"});}}>감소</ButtonComponent>
        <ButtonComponent type="secondary" clickHandler={()=>{dispatch({type:"INIT"})}}>초기화</ButtonComponent>
    </div>
  )
}
