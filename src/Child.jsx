export default function Child({click}){
     
     console.log("rendered");

     return (
          <>
               <h2>Child Component</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus exercitationem non porro ea nostrum, voluptatem nisi quisquam, voluptatibus illo, veniam doloribus omnis dolorem? Cupiditate esse modi perspiciatis minima necessitatibus.</p>
               
               <button className="btn btn-primary" onClick={click}>Click</button>
         
          </>
     )
}