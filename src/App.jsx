import Header from "./Header";
import Footer from "./Footer";
import Cars from "./Carapi";
import Comp1 from "./C1";
import Comp2 from "./C2";
import { useEffect, useRef, useState } from "react";
import { createContext, useContext } from "react";
import { useReducer } from "react";


export default function App(){

  /* context api */
  const ThemeContext=createContext();

  /* provider */
  function ThemeData(){
      const [theme,setTheme]=useState(localStorage.theme || "light" );

      useEffect(()=>{
          document.documentElement.setAttribute("data-bs-theme",theme);
          localStorage.setItem("theme",theme);
      },[theme]);

      return ( <ThemeContext.Provider value={{theme,setTheme}}>
                  <Consumer />
            </ThemeContext.Provider>
      )
  }

  /* consumer */
  function Consumer(){
    const {theme,setTheme}=useContext(ThemeContext);

      return (
        <>
            <p>Current Theme : {theme}</p>
            <label><input type="checkbox" checked={ (theme=="dark") ? true : false  } onChange={(e)=>setTheme( (e.target.checked) ? "dark" : "light" )} /> : Dark</label>
        </>
      )
  }


  /* useReducer */

  const initialVal={ count:0 };

  function reducer(state, action){
      switch(action.type){
          case "inc" : return { count : state.count+1 }; 
          case "dec" : return { count : state.count-1 }; 
          case "reset" : return { count : 0 }; 
          default : state;
      }
  }

  function Counter(){

    const [state,dispatch]=useReducer(reducer,initialVal);

    return (
        <div>
            <p>Initial Value : {initialVal.count}</p>
            <p>Counter : {state?.count}</p>
            <button onClick={()=>dispatch({type:"inc"})} className="btn btn-outline-success me-2">+</button>
            <button onClick={()=>dispatch({type:"dec"})} className="btn btn-outline-danger me-2">-</button>
            <button onClick={()=>dispatch({type:"reset"})} className="btn btn-outline-primary me-2">0</button>
        </div>
    )


  }

  
 
  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>


        <ThemeData></ThemeData>

        <hr />

        <Counter></Counter>



        </main>
        <Footer />
    </div>
  )
}