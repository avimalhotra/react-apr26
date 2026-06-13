import { useEffect, useState } from "react";


export default function Cars(){
     const url=`https://www.techaltum.com/node/api`;

     const [data,setData]=useState([]);
     // const [loading,setLoading]=useState(true);
     const [error,setError]=useState(null);


     useEffect(()=>{
          
          async function fetchData(){

               try{
                    // setLoading(true);
                    let res=await fetch(url);
                    if(!res.ok){   throw new Error(`Error: ${res.status}`) }
                    let res2=await res.json();
                    setData(res2);
               }
               catch(err){
                    setError(err.message);
               }
               finally{
                    // setLoading(false);
               }
          }

          fetchData()

     },[]);

     function sortPrice(){
          const sort=[...data].sort((a,b)=>a.price-b.price); 
          setData(sort);
     }
      function sortName(){
          const sort=[...data].sort((a,b)=>{
               if(a.name<=b.name){ return -1 }
               else{ return 1 }
          });
          setData(sort);
     }
     function sortType(){
          const sort=[...data].sort((a,b)=>{
               if(a.type<=b.type){ return -1 }
               else{ return 1 }
          });
          setData(sort);
     }


     // if(loading){ return  <img className="d-block mx-auto" src="loader.svg" alt="" width={100} height={100} /> }

     if(error){ return <div className="alert alert-danger"> error found {error} </div> }

     return (
          <>
               <h2>Cars API</h2>
               <div className="mb-3">
                    <button onClick={sortName} className="btn btn-outline-primary me-3">Name Sort</button>
                    <button onClick={sortType} className="btn btn-outline-primary me-3">Type Sort</button>
                    <button onClick={sortPrice} className="btn btn-outline-primary me-3">Price Sort</button>
                    </div>
               <table className="table table-bordered border-primary">
                    <thead>
                         <tr>
                              <th>S No</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Price (Ex Showroom)</th>
                              <th>Price ( On Road )</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}>
                                        <td>{++ind}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.type}</td>
                                        <td>{elem.price}</td>
                                        <td>{(elem.price*1.15).toFixed(0)}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>     
               </>  
     )
}