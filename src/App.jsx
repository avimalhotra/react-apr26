import Header from "./Header";
import Footer from "./Footer";
import { useState, useMemo } from "react";
import Child from "./Child";
import { useCallback } from "react";

export default function App(){

  const [count,setCount]=useState(0);

  //   const expensiveTask=useMemo(()=>{
  //     let counter=0;
  //     console.time("t");
  //       for( let i=1; i<=1000000000; i++){
  //         counter +=i;
  //       }
  //       console.timeEnd("t");
  //       return counter;
  //   },[]);


  // const handleClick = () => {  console.log("Clicked"); setCount(count+1) };
  const handleClick = useCallback(() => {  
      console.log("Clicked");
      // setCount(count+1);             // change will re render
   },[]);

 
  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos quaerat minus impedit quibusdam et dignissimos similique ex, vero, ab dicta vel nulla minima, quod perferendis aperiam. Maiores, mollitia non?</p>
          <p>Counter: {count}</p>
          <hr />

          {/* <p>Total sum: {expensiveTask}</p>

          <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Add</button> <output>{count}</output> */}

          <hr />

          
          <Child click={handleClick}></Child>


        </main>
        <Footer />
    </div>
  )
}