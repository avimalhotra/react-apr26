import Header from "./Header";
import Footer from "./Footer";
import Cars from "./Carapi";
import Comp1 from "./C1";
import Comp2 from "./C2";
import { useState } from "react";
import { createContext, useContext } from "react";


export default function App(){

  const [counter,setCounter]=useState(0);
  const data=[{ price: 10 }, { price: 20 }, { price: 30 }];
  const total=data.reduce((x,y)=> x + y.price,0);


  /* context api */
  const ThemeContext=createContext();

  function ThemeData(){
      const theme={ mode:"dark", text:"lightblue" };

      return ( <ThemeContext.Provider value={theme}>
              <Consumer />
            </ThemeContext.Provider>
      )
  }

  function Consumer(){
      const currentTheme=useContext(ThemeContext);
      return <p>Mode: {currentTheme.mode}, text color:{currentTheme.text}</p>
  }

  
 
  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>
          <button onClick={()=>setCounter(counter+1)} className="btn btn-primary me-3">Increment</button>
          <span>Counter: {counter}</span>
          <hr />
          
          {/* <Comp1 count={counter} /> */}
          {/* <Comp2 count={counter} /> */}

        <ThemeData></ThemeData>

        </main>
        <Footer />
    </div>
  )
}