import { useState } from "react";

export default function useInput(initValue=""){
    const [value,setValue]=useState(initValue);
    const onChange=(e)=>{
        setValue(e.target.value);
    }
    const reset=(e)=>{
        setValue(initValue);
    }
    return {
        value,
        reset,
        attr:{value:value,onChange:onChange},
    };
}