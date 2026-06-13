import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Nav";
import { BrowserRouter } from "react-router-dom";
import RApp from "./Routes";

// import Child from "./Child";
import React, { useRef, useState, Suspense } from "react";
import ModelComponent from "./Model";
import ErrorBoundary from "./ErrorBoundary";

// import Cars from "./Carapi";
const Cars=React.lazy(()=>import("./Carapi"));

export default function App(){
  const [open,setOpen]=useState(false);
  
  return (
    <div className="container">
         <BrowserRouter>
        <Header />

        <Navbar />

        <main className="p-3">
            <RApp></RApp>
         

          {/* <ErrorBoundary>
            <Child x={2}  ref={ref} />
          </ErrorBoundary>
          */}

          {/* <Suspense fallback={<div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
            <Cars></Cars>
          </Suspense> */}

     
        </main>
        <Footer />
        </BrowserRouter>
    </div>
  )
}