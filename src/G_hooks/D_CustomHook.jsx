import React from 'react'
import useInput from './customhook/useInput';
import ButtonComponent from '../F_datamanage/props/sample/ButtonComponent';
import useDebouncer from './customhook/useDebouncer';
import useFetch from './customhook/useFetch';
export default function D_CustomHook() {
  const inputData = useInput("");
  const debounceValue=useDebouncer(inputData.value,400);
  const {data, isLoading,error}=useFetch(`http://teacherdev09.kro.kr:10002/endpoint/api/products/${debounceValue?"/"+debounceValue:""}`,);
  return (
    <div>
        <h3>커스텀 훅 사용하기</h3>
        <p>
            input태그 입력값을 처리하는 hook만들기</p>
            <input type="text" className="p-2 border rounded" 
            // onChange={inputData.onChange} value={inputData.value}
            {...inputData.attr}
            />
        <ButtonComponent type="warn" clickHandler={inputData.reset}>초기화</ButtonComponent>
        <p>저장된 입력값 :{debounceValue?debounceValue:""}</p>
        <div>
          {isLoading&&<p className='text-xl fount-bold'></p>}
          {error&&<p className='text-xl font-bold text-red-500'>{error}</p>}
          {JSON.stringify(data)}
        </div>
    </div>
  )
}
