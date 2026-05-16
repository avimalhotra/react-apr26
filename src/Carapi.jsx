import { useEffect, useState } from "react";


export default function Cars(){
     const url=`https://www.techaltum.com/node/api`;
     // useEffect(()=>{
     //      fetch(url)
     //      .then(i=>{ 
     //           if(!i.ok){ throw new Error("api error") }
     //           return i.json();
     //      })
     //      .then(i=>console.log(i))
     //      .catch(e=>console.warn(e));
     // },[]);

     const [data,setData]=useState([]);
     const [loading,setLoading]=useState(true);
     const [error,setError]=useState(null);


     useEffect(()=>{
          
          async function fetchData(){

               try{
                    setLoading(true);
                    let res=await fetch(url);
                    if(!res.ok){   throw new Error(`Error: ${res.status}`) }
                    let res2=await res.json();
                    setData(res2);
               }
               catch(err){
                    setError(err.message);
               }
               finally{
                    setLoading(false);
               }
          }

          fetchData()

     },[]);



     if(loading){ return  <img className="d-block mx-auto" src="loader.svg" alt="" width={100} height={100} /> }

     if(error){ return <div className="alert alert-danger"> error found {error} </div> }

     return (
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
     )
}