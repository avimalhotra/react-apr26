import { useState, useEffect, use } from "react";

function useFetch(url){

     const [data,setData]=useState(null);
     const [loading,setLoading]=useState(true);
     const [error,setError]=useState(null);

     useEffect(()=>{

          async function  fetchData(){
               try{
                    const data= await fetch(url);
                    if(!data.ok){ throw new Error("API Error") }
                    const res=await data.json();
                    setData(res);
               }
               catch(err){
                    setError(err);
               }
               finally{
                    setLoading(false);
               }
          }

          fetchData();

     },[url]);

     return {data, loading, error};
}

export default useFetch;