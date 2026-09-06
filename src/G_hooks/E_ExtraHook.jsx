import React, { useActionState, useOptimistic, useState } from "react";
//19버전 이후 hook
const requestTest = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.includes("bs")) {
        reject(new Error("서버 전송에 실패했음"));
      } else {
        resolve(data);
      }
    }, 3000);
  });
};
export default function E_ExtraHook() {
  const [result, formAction, isPending] = useActionState(
    async (prev, formData) => {
      //form태그 내부에 있는 input태그의 값을 가져오기
      const message = formData.get("message");
      console.log(message);
      const userName = formData.get("userName");
      console.log(userName);

      if (!message?.trim()) return { ok: false, message: "메세지 입력하세요!" };

      //서버 요청
      await requestTest(message);

      return { ok: true, message: `${message} 전송 완료` };
    },
    null,
  );

//useOptimistic()이용하기
const [data,setData]=useState(["여러분 힘내세요"])
const[optimisticMessage,addOptomisticMessage]=useOptimistic(data,(current,newData)=>{
  return [...current, newData+'(저장중...)'];
});
const sendData=async(formData)=>{
  const data=formData.get("data");
  if(!data?.trim())return;
  addOptomisticMessage(data);
  await requestTest(data);
  setData(prev=>[...prev, data]);

}

  return (
    <div>
      <h3>useActionState()이용하기</h3>
      <p>formData를 이용해서 form내부에 작성된값을 처리하는 hook</p>
      <p>상태업데이트, 로딩처리, 비동기 작업처리 한번에 처리</p>
      <p>
        매개변수
        <br />
        1 : 폼제출이나 사용자 인터렉션시 실행될 액션함수
        <br />
        {/* (이전값, 새로운값(formData))=>{} */}
        2 : 초기상태
        <br />
        반환값 : 배열반환
        <br />
        0 : 상태값
        <br />
        1 : 액션함수
        <br />
        2 : 진행여부(boolean)
        <br />
      </p>
      <form action={formAction} className="my-2 flex items-center gap-2">
        <input
          type="text"
          name="message"
          className="rounded border px-2 py-1"
          placeholder="메시지 입력"
        />
        <input
          type="text"
          name="userName"
          className="rounded border px-2 py-1"
          placeholder="사용자 입력"
        />
        <button
          type="submit"
          className="rounded border border-green-500 text-green-500 p-2"
        >
          {isPending ? "전송중...." : "전송하기"}
        </button>
      </form>
      {result &&<p className={`text-sm ${result.ok?'text-green-600':'text-red-600'}`}>{result.message}</p>}
      <h3 className="text-xl font-bold">useOptimistic()</h3>
      <form action={sendData} >
        <input type="text" name="data" className="rounded border px-2 py-1"/>
        <button
          type="submit"
          className="rounded border border-green-500 text-green-500 p-2"
        >저장하기</button>
      </form>
      <ul>
        {optimisticMessage.map((item,index)=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
