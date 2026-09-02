import { useEffect,useState } from "react";
export default function useDebouncer(value,delay=500){
    const [debounce,setDebounce]=useState(value);
    useEffect(()=>{
const timeId=setTimeout(()=>{
    setDebounce(value);

},delay);
return()=>{
    clearTimeout(timeId);
};
    },[value,delay])
    return debounce;
}