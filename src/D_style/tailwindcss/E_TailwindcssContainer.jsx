import React from "react";
import AlertComponent from "./sample/AlertComponent";
import ButtonComponent from "./sample/ButtonComponent";
import CardComponent from "./sample/CardComponent";
import InputFormComponent from "./sample/InputFormComponent";
export default function E_tailwindcssContainer() {
  return (
    <div className="space-y-6 my-6 mx-4 p-4 bg-slate-50 rouded-xl border border-slate-200">
      <h2>tailwindcss로 스타일 설정하기</h2>
      <p>tailwindcss가 설정한 클래스명을 이용해서 스타일을 적용</p>

      <h2>텍스트스타일</h2>
      <p className="text-2xl font-extrabold tracking-wide underline underline-offset-4">
        텍스트 스타일을 적용
      </p>
      <p className="text-sm text-blue-500 italic  mt-1">텍스트 스타일 추가</p>

      <h2>박스모델 테두리 설정</h2>
      <div className="bg-emerald-300 text-emerald-900 p-4 rounded-xl border-2 border-emerald-100 shadow-md">
        <span className="font-bold">박스모델 스타일 설정</span>
      </div>
      <div className="flex justify-between item-center border">
        <div>내부요소</div>
        <div className="flex gap-2">
          <p>1</p>
          <p>2</p>
        </div>
        <div>내부요소2</div>
      </div>
      <h2>반응형 스타일 설정</h2>
      <button className="px-10 py-4 rounded-xl bg-blue-500 hover:bg-blue-700 active:scale-95 trasition-all duration-200 cursor-pointer text-white">
        클릭하세요!
      </button>
      <button
        disabled
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400 text-white font-medium rounded-lg cursor-pointer"
      >
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        처리 중...
      </button>
      <div className="mt-4">
        <h2>tailwindcss적용된 컴포넌트</h2>
        <div className="flex flex-col gap-4 p-4">
          <AlertComponent />
          <ButtonComponent />
          <section className="flex gap-2">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </section>
          <InputFormComponent />
        </div>
      </div>
    </div>
  );
}
