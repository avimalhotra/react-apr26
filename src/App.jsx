import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){

  const [counter,setCounter]=useState(0);
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [form,setForm]=useState({username:"", password:"", phone:""});
  const [arr,setArr]=useState([]);

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
      { ...prev, [name] : value }
    ));
  }

  /* array */

  function addToArray(e){
      e.preventDefault();
      const x=e.target.num.value;
      setArr([...arr,x]);
      // document.querySelector("#num").value="";
  }
  function removeFromArray(e){
      const t=e.target.parentElement.textContent.trim();
      setArr(arr.filter(i=>i!=t));
  }

  function sayHello(x=""){
    console.log(`datetime: ${x}`);
  }

  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Hello User </h2>
          
          {/* <button onClick={sayHello} className="btn btn-secondary">Hello</button> */}
          <button onClick={()=>sayHello(new Date().toLocaleString())} className="btn btn-secondary">Hello</button>

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
          <hr />

          <form className="row align-items-center" onSubmit={addToArray}>
            <div className="col-auto"><label htmlFor="num" className="form-label">Add Name : </label></div>
            <div className="col-auto"><input className="form-control" id="num" type="text" name="num" required /></div>
            <div className="col-auto"><button className="btn btn-primary">Add</button></div>
          </form>
          <ol className="list-group">
            {
              arr.map((elem,ind)=>(
                  <li className="list-group-item" key={ind}>{elem} 
                  <button className="btn-close float-end" onClick={removeFromArray}></button>
                  </li>
              ))
            }
          </ol>
          


        </main>
        <Footer />
    </div>
  )
}