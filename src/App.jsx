import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){

  const [counter,setCounter]=useState(0);
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [form,setForm]=useState({username:"", password:"", phone:""});

  function handleClick(){
      // setCounter(counter+1);
      // setCounter(counter+2);
      // setCounter(counter+3);
      setCounter(x=>x+1);
      setCounter(x=>x+2);
      setCounter(x=>x+3);
  }

  function handleChange(e){
    
    const {name,value}=e.target;

    setForm(prev=>(
      {...prev, [name] : value }
    ));


  }


  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Hello User </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <button className="btn btn-primary me-3" onClick={()=>setCounter(counter+1)}>Increment</button> 
          <button className="btn btn-primary me-3" onClick={()=>setCounter(counter-1)}>Decrement</button> 
          <button className="btn btn-primary me-3" onClick={()=>setCounter(0)}>Reset</button> 
          <span>{counter}</span>

          <hr />

          <button className="btn btn-outline-primary" onClick={handleClick}>Click</button>
          
          <hr />

          <form action="" className="row align-items-center">
                <div className="col-auto"><label className="form-label" htmlFor="name">Name</label></div>
                <div className="col-auto"><input value={name} type="text" id="name" className="form-control" onChange={e=>setName(e.target.value)} /></div>
                <div className="col-auto"><label className="form-label" htmlFor="age">Age</label></div>
                <div className="col-auto"><input value={age} type="number" id="age" className="form-control" onChange={e=>setAge(e.target.valueAsNumber)} /></div>
          </form>
          <p>Name: {name}</p>
          <p>Age: {age}</p>


          <hr />


          <form action="" className="row align-items-center">
                <div className="col-auto"><label className="form-label" htmlFor="username">Username</label></div>
                <div className="col-auto"><input type="text" id="username" name="username" value={form.username} className="form-control" onChange={handleChange} /></div>
                <div className="col-auto"><label className="form-label" htmlFor="phone">Phone</label></div>
                <div className="col-auto"><input type="tel" name="phone" id="phone" value={form.phone} className="form-control" onChange={handleChange}  /></div>
                <div className="col-auto"><label className="form-label" htmlFor="password">Password</label></div>
                <div className="col-auto"><input type="password" name="password" id="password" value={form.password} className="form-control" onChange={handleChange}  /></div>
          </form>
          <p>Userame: {form.username}, 📞 : {form.phone}, Password: {form.password},  </p>
          


        </main>
        <Footer />
    </div>
  )
}