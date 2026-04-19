import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./Card";
import { useState } from "react";

export default function App(){

  const name="Avinash";
  const react="React";
  const version=19;
  const desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore possimus cupiditate provident, voluptatibus optio voluptate deserunt doloribus at. Aspernatur, non eius? Ab nostrum maxime hic officia, tenetur ipsa ex.";

  const [counter,setCounter]=useState(0);

  return (
    <div className="container">
        
        <Header name={react} version={version} year={2025} />

        <main className="p-3">
          <h2>Hello {name} </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet impedit accusantium libero a incidunt quos deserunt nam repellendus rem ratione nulla alias sapiente beatae autem aliquam repellat, dicta aspernatur.</p>
          
          <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter+1)}>Increment</button>
          <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter-1)}>Decrement</button>
          <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(0)}>Reset</button>
          
          <output className="ms-3">{counter}</output>

          <hr />
          <h2>Cards</h2>
          <div className="row">
            <div className="col-sm-4"><ProductCard title="IPhone 17 Pro" price={135000} desc={desc} /></div>
            <div className="col-sm-4"><ProductCard title="IPhone 17 Air" price={120000} desc={desc} /></div>
            <div className="col-sm-4"><ProductCard title="IPhone 17" price={82500} desc={desc} /></div>
          </div>
          

         
        </main>
        <Footer />
    </div>
  )
}