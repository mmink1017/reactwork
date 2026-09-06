import React from 'react'
import NonUseMemoTest from './child/NonUseMemoTest'
import UseMemoCom from './child/UseMemoCom'

export default function B_UseMemoTest() {
  return (
    <div>
      <h3>useMemo()이용하기</h3>
      <p>
        랜더링최적화 해주는 hook
        연산에 비용이 많이 드는 경우 계속 연산하지 않고 저장해서 활용하는 기능
      </p>
      <h3>성능비교하기</h3>
      <div>
        <h4 className="text-lg font-bold">메모를 사용하지 않는 컴포넌트</h4>
        <NonUseMemoTest/>
        <h4 className="text-lg font-bold">메모를 사용한 컴포넌트</h4>
        <UseMemoCom/>
      </div>
    </div>
  )
}
