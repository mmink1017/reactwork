import { useEffect,useState } from "react";

export default function useFetch(url){
    const [data,setData]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setLoading(true);
        setError(null);
        (async ()=>{
        try{
        const response=await fetch(url);
            if(!response.ok) throw new Error(`요청실패 ${response.status}`);
            setData(await response.json());
        }catch(e){
            setError(e.message);
        }finally{
            setLoading(false);
        }
    })();
        },[url]);
    return{data, isLoading, error}
    }