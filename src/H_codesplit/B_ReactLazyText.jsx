import React, {lazy,Suspense, useState} from 'react'
import {
  cardContainerStyle,
  subCardStyle,
  sectionTitleStyle,
  buttonStyle,
  inputStyle,
} from "./utils/commonclass";
const LazyChart=lazy(()=>{
    return import("./utils/HeavyChartComponent.jsx");
})
export default function B_ReactLazyText() {
    const [isChart,setChart]=useState(false);
    const getChart=()=>{
        setChart(true);
    };
  return (
    <div>
        <button className={buttonStyle({variant:"amber"})} onClick={getChart}>차트가져오기</button>
        {isChart&&<div>
            <Suspense>
                <LazyChart/>
            </Suspense>
            </div>}
    </div>
  )
}
