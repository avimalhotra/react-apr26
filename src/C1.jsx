import Comp11 from "./C11";

export default function Comp1({count}){
     return (
          <div className="card mb-3">
               <div className="card-body">
                    <h2>Comp 1</h2>
                    {/* <p>Counter: {count}</p> */}
                    <hr />
                    <Comp11 count={count}></Comp11>
               </div>
          </div>
     )
}