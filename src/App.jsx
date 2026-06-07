import Header from "./Header";
import Footer from "./Footer";
import Child from "./Child";
import { useRef, useState } from "react";
import ModelComponent from "./Model";
import ErrorBoundary from "./ErrorBoundary";

export default function App(){
  const [open,setOpen]=useState(false);
  const ref=useRef();
  function focusRef(){ref.current.focus();}

  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Main </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos quaerat minus impedit quibusdam et dignissimos similique ex, vero, ab dicta vel nulla minima, quod perferendis aperiam. Maiores, mollitia non?</p>

          <button className="btn btn-primary me-3" onClick={focusRef}>Focus</button>
          <button className="btn btn-primary me-3" onClick={()=>setOpen(true)} >Signup</button>

          {
            open && (
              <ModelComponent>
                  <div className="model"></div>
                  <div className="popup">
                    <button className="btn btn-close float-end" onClick={()=>setOpen(false)}></button>
                    <h2>Sign Up Form</h2>
                   <form>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" />
                      </div>
                       <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
              </ModelComponent>
            )
          }


          <hr />

          <ErrorBoundary>
            <Child x={2}   ref={ref} />
          </ErrorBoundary>


     


        </main>
        <Footer />
    </div>
  )
}