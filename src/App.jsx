import Header from "./Header";
import Footer from "./Footer";
import Cars from "./Carapi";
import { useRef, useState } from "react";
// import { useEffect, useState } from "react";

export default function App(){

  const ref=useRef(0);
  const nameRef=useRef(null);
  const ref2=useRef(0);
  const [counter,setCounter]=useState(0);

  function changeRef(){
    ref.current++;
    console.log(ref);
  }

  function focusInput(){ nameRef.current.focus();}

  ref2.current=ref2.current+1;
 
  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>
          <hr />
          
          <section>
              <h2>Cars Data</h2>
              <p>Ref: {ref.current}</p>
              <button className="btn btn-outline-primary" onClick={changeRef}>Change Ref</button>
              <hr />
              <div className="row">
                <div className="col-auto"><input type="text" className="form-control" ref={nameRef}/></div>
                <div className="col-auto"><button className="btn btn-outline-primary" onClick={focusInput}>Focus</button></div>
              </div>
              <hr />
              <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter+1)}>Change Counter</button>
              <p>Counter:{ counter}</p> 
              <p>Component Rendered : {ref2.current}</p>

              {/* <Cars></Cars> */}
          </section>

        </main>
        <Footer />
    </div>
  )
}