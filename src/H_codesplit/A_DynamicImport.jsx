import React, { useState } from "react";
import {
  cardContainerStyle,
  subCardStyle,
  sectionTitleStyle,
  buttonStyle,
  inputStyle,
} from "./utils/commonclass";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";
export default function A_DynamicImport() {
  const [primes, setPrimes] = useState([]);
  const [textAnalysis, setTextAnalysis] = useState(null);
  const [inputText, setInputText] = useState(
    "오늘은 너무 재미있는 수업을 하고 있구나",
  );
  const handleLoadingAndCalculatorPrimes = async () => {
    try {
      //동적으로 js파일 가져오기
      const { calculatePrimes } = await import("./utils/heavyCalculator");
      const result = calculatePrimes(30000);
      setPrimes(result);
    } catch (e) {
      console.error(e);
    }
  };
  const handleAnalyzeText = async (e) => {
    const { analyzeText } = await import("./utils/heavyCalculator2");
    const result = analyzeText(inputText);
    setTextAnalysis(result);
  };
  return (
    <div>
      <ButtonComponent clickHandler={handleLoadingAndCalculatorPrimes}>
        계산하기
      </ButtonComponent>
      <div>{primes}</div>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        className={inputStyle("w-full mb-2")}
        placeholder="분석할 텍스트 입력"
      />
      {textAnalysis && (
        <div className="p-2 rounded border text-xs mb-3 space-y-1">
          <div>
            글자수 : {textAnalysis.charCount} / 단어수 :{" "}
            {textAnalysis.wordCount}
          </div>
          <div>
            주요단어 :{" "}
            {textAnalysis.topWords.map(([m, c]) => `${m}(${c})`).join(",")}
          </div>
        </div>
      )}
      <button
        className={buttonStyle({ variant: "teal", extraClass: "w-full" })}
        onClick={handleAnalyzeText}
      >
        분석하기
      </button>
    </div>
  );
}
