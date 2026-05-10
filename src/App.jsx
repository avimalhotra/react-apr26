import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function App(){

  const [count,setCount]=useState(0);
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [terms,setTerms]=useState(false);
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");


    // useEffect(()=>{console.log("effect")});       
    // useEffect(()=>{console.log("effect")},[count]);
    
    useEffect(()=>{
          const interval=setInterval(()=>{
            console.log(new Date().toLocaleString());
          },1000);

          return ()=>clearInterval(interval);     // clean up

    },[]);
  

  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>

            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Add</button> <output>{count}</output>

            <hr />
          <form action="" className="row align-items-center g-3">
                <div className="col-3"><label className="form-label" htmlFor="name">Name</label></div>
                <div className="col-9"><input value={name} type="text" id="name" className="form-control" onChange={e=>setName(e.target.value)} /></div>
                
                <div className="col-3"><label className="form-label" htmlFor="age">Age</label></div>
                <div className="col-9"><input value={age} type="number" id="age" className="form-control" onChange={e=>setAge(e.target.valueAsNumber)} /></div>
                
                <div className="col-3"> Terms </div>
                <div className="col-9">
                  <div className="row">
                      <div className="col-auto"> <input type="checkbox" id="terms" checked={terms} onChange={e=>setTerms(e.target.checked)} className="form-check"/></div> 
                      <div className="col-auto"><label htmlFor="terms"> : I Agree</label></div>
                  
                  </div>
                </div>
                
               <div className="col-3">Gender</div>
               <div className="col-9">
                      <div className="row">
                          <div className="col-auto"><input type="radio" id="female" name="gender" value="female" checked={ gender==="female"} onChange={(e)=>setGender(e.target.value)}/> </div>
                          <div className="col-auto"><label htmlFor="female"> : Female</label></div>

                          <div className="col-auto"><input type="radio" id="male" name="gender" value="male" checked={ gender==="male"} onChange={(e)=>setGender(e.target.value)}/> </div>
                          <div className="col-auto"><label htmlFor="male"> : Male</label></div>
                      </div>
               </div>

                <div className="col-3"><label className="form-label" htmlFor="city">City</label></div>
                <div className="col-9">
                  <select className="form-select" value={city} onChange={(e)=>setCity(e.target.value)}>
                    <option defaultValue="" disabled value="">--Choose City--</option>
                    <option>New Delhi</option>
                    <option>Chennai</option>
                  </select>
                </div>
                
                <div className="col-3"></div>
                <div className="col-9"><button className="btn btn-primary">Send</button></div>
          </form>

          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Terms: { (terms)? "Agree" : "Not Agree" }</p>
          <p>Gender: { gender }</p>
          <p>City: { city }</p>

    
        </main>
        <Footer />
    </div>
  )
}