import Header from "./Header";
import Footer from "./Footer";
import Cars from "./Carapi";
// import { useEffect, useState } from "react";

export default function App(){

 
  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>
          <hr />
          
          <section>
              <h2>Cars Data</h2>
              <Cars></Cars>
          </section>

          
    
        </main>
        <Footer />
    </div>
  )
}