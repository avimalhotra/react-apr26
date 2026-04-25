import Header from "./Header";
import Footer from "./Footer";

export default function App(){

    const cars=["swift","baleno","dzire","brezza","grand vitara"];
    const swift={name:"swift", power:82, torque:112, price:800000};
    const data=[
                {"id":1,"name": "swift", "type": "hatchback", "price":850000},
                {"id":2,"name": "dzire", "type": "sedan", "price":980000},
                {"id":3,"name": "ciaz", "type": "sedan", "price":1100000},
                {"id":4,"name": "baleno", "type": "hatchback", "price":880000},
                {"id":5,"name": "fronx", "type": "hatchback", "price":1150000},
                {"id":6,"name": "brezza", "type": "suv", "price":1250000},
                {"id":7,"name": "grand vitara", "type": "suv", "price":1990000},
                {"id":8,"name": "invicto", "type": "mpv", "price":2990000},
                {"id":9,"name": "alto", "type": "hatchback", "price":380000},
                {"id":10,"name": "s presso", "type": "hatchback", "price":350000},
                {"id":11,"name": "wagon r", "type": "hatchback", "price":500000},
                {"id":12,"name": "jimny", "type": "suv", "price":1400000}
            ];
        // const hatchback=data.filter(i=>i.type=="hatchback");
         

            const numbers=[0,1,2,3,4,5,6,7,8,9];
            const even=numbers.filter(i=>i%2==0);
            const sum=numbers.reduce((x,y)=>x+y,0);
            


  return (
    <div className="container">
        
        <Header />

        <main className="p-3">
          <h2>Hello User </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet impedit accusantium libero a incidunt quos deserunt nam repellendus rem ratione nulla alias sapiente beatae autem aliquam repellat, dicta aspernatur.</p>

          <h3>Array</h3>
          <ol>
              {
                cars.map((elem,ind)=>(
                  <li key={ind}>{elem}</li> 
                ))
              }
          </ol>
          <hr />
          <h3>Object</h3>
          <table className="table table-bordered border-primary">
            <thead><tr><th>Property</th><th>Value</th></tr></thead>
            <tbody>
              {
                Object.entries(swift).map(([x,y],ind)=>(
                  <tr key={ind}><td>{x}</td><td>{y}</td></tr>
                ))
              }
            </tbody>
          </table>
          <hr />
          <h3>JSON Data</h3>
          <table className="table table-bordered border-primary">
            <thead><tr><th>S No</th><th>Name</th><th>Body</th><th>Price</th><th>On Road</th></tr></thead>
            <tbody>
              {
                data.map(elem=>(
                  <tr key={elem.id}><td>{elem.id}</td><td>{elem.name}</td><td>{elem.type}</td><td>{elem.price}</td><td>{(elem.price*1.15).toFixed(0)}</td></tr>
                ))
              }
            </tbody>
           </table> 

           <hr />

           {/* <ol>
            {
              numbers.map((elem,ind)=>(
                <li key={ind}>{elem}</li>
              ))
            }
           </ol> */}

        
        </main>
        <Footer />
    </div>
  )
}