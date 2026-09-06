import React,{useState} from 'react'
import ButtonComponent from '../../F_datamanage/props/sample/ButtonComponent';

export default function NonUseMemoTest() {
    const [num,setNum]=useState(0);
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme(prev=>prev==="light"?"dark":"light");
    }
    const style={
        padding:"1rem",
        backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white",
    }
    const slowSquare=()=>{
        console.log("페이지 로딩시 계산 처리하기");
        let result=num*num;
        for(let i =0; i<1_000_000_000;i++){
            result=result+1;
        }
        return result;
    }
  return (
    <div style={style}>
        <input type="text" value={num} onChange={(e)=>{
            setNum(e.target.value);
        }}/>
        <h2>결과:{slowSquare()}</h2>
        <ButtonComponent clickHandler={()=>{toggleTheme();}}>테마변경</ButtonComponent>

    </div>
  )
}
