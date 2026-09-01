import React, { useEffect, useRef, useState } from "react";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";
import {Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, LineController,LineElement, PointElement, BarController,} from "chart.js";

export default function A_UseRefTest() {
  const container = useRef();
  const testUseref = () => {
    console.log(container.current); // 태그에 접근
    console.log(container.current.tagName);
    console.log(container.current.innerHTML);
  };
  // 포커싱 처리하기
  const focusTag = useRef();
  const handleFocus = () => {
    if (focusTag.current) focusTag.current.focus();
  };

  // 스크롤 데이터 처리하기
  const [message, setMessage] = useState([]);
  const bottomRef = useRef();
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [message]);

  //타이머 저장하기
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);
  // let timeRef = null;
  const start = () => {
    // if (timeRef) return;
    if (timeRef.current) return;
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    // timeRef = id;
    timeRef.current = id;
  };
  const end = () => {
    if (timeRef.current) {
      // if (timeRef) {
      clearInterval(timeRef.current);
      timeRef.current = null;
      // timeRef = null;
    }
  };
  //이전 입력값 관리하기
  const [inputData, setInputData] = useState("");
  const preValues = useRef([]);
  const inputDataChange = (e) => {
    setInputData(e.target.value);
  };
  useEffect(() => {
    if (inputData !== "") preValues.current.push(inputData);
  }, [inputData]);
  const preDataCheck = () => {
    console.log(preValues.current);
  };
  const preInputGet = () => {
    setInputData(preValues.current.pop());
  };
  //차트 출력하기
  const canvaseRef=useRef(null);
  Chart.register(BarController,LineController,BarElement,LineElement,PointElement,CategoryScale,LinearScale,Tooltip,Legend);
  //그래프에 출력할 데이터를 생성
  const[labels,setLabels]=useState(["1월","2월","3월","4월","5월"]);
  const[chartData,setChartData]=useState([120,150,180,50,40]);
  const chartRef=useRef(null);
  useEffect(()=>{
    if(chartRef.current){
      chartRef.current.destroy();
    }
    const ctx=canvaseRef.current.getContext("2d");
    chartRef.current=new Chart(ctx,{type:"line",//bar,pie...
      data:{
        labels,
        datasets:[{label:"월별 매출", data: chartData, backgroundColor:"rgba(76,192,180,0.6)", borderColor:"rgba(255,100,90,0.6)", }]
      }})
      return()=>{
        //컴포넌트가 사라지기전에(unmounted) 실행되는 함수
        if(chartRef.current){
          chartRef.current.destroy();
        }
      }
  }, [labels,chartData]);
  return (
    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold m-2">useRef이용하기</h3>
      <p>
        DOM요소에 접근할 수 있는 hook 태그에 접근하는 것 DOM의 위치, 이전값 등을
        사용할 때 사용 랜더링하고 무관한 데이터를 저장관리할 수 있음.
      </p>
      <div ref={container}>container조작</div>
      <ButtonComponent
        clickHandler={() => {
          testUseref();
        }}
      >
        객체 확인
      </ButtonComponent>
      <h3>특정 태그에 포커스 설정하기</h3>
      <div>
        <input
          ref={focusTag}
          type="text"
          className="border border-black rounded p-2 m-2"
        />
        <ButtonComponent
          clickHandler={() => {
            handleFocus();
          }}
        >
          포커싱하기
        </ButtonComponent>
      </div>
      <h3 className="text-lg font-bold">scroll데이터 처리하기</h3>
      <div
        style={{
          border: "1px solid gray",
          height: "150px",
          overflow: "auto",
          padding: "8px",
        }}
      >
        {message.map((v, i) => {
          return <p key={`${v}_${i}`}>{v}</p>;
        })}
        <div ref={bottomRef}></div>
      </div>
      <ButtonComponent
        clickHandler={() => {
          setMessage((prev) => [...prev, "오늘은 월요일 화이팅!"]);
        }}
      >
        추가
      </ButtonComponent>
      <h3>시간 데이터 출력</h3>
      <p>랜더링과 관계없이 시간 정보를 저장하고 싶을때 </p>
      <p>타이머 : {count}초</p>
      <ButtonComponent clickHandler={start}>시작</ButtonComponent>
      <ButtonComponent clickHandler={end}>종료</ButtonComponent>

      <h3 className="text-lg font-bold">이전 데이터 기억하기</h3>
      <div>
        <input type="text" value={inputData} onInput={inputDataChange} />
        <ButtonComponent clickHandler={preDataCheck}>
          입력 데이터들 확인
        </ButtonComponent>
        <ButtonComponent clickHandler={preInputGet}>이전값으로</ButtonComponent>
      </div>
      <div className="w-full">
        <canvas ref={canvaseRef}/>
      </div>
    </div>
  );
}
