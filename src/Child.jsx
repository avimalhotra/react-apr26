import { forwardRef } from "react";

 const Child=forwardRef(function(props,ref){
     console.log(props);

     return (
          <section>
               <h2>Child Component</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus exercitationem non porro ea nostrum, voluptatem nisi quisquam, voluptatibus illo, veniam doloribus omnis dolorem? Cupiditate esse modi perspiciatis minima necessitatibus.</p>
                <input type="text" ref={ref} />
               
          </section>
     )
})

export default Child;