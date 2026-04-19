export default function ProductCard({title="",price=0,desc=""}){
     return (
          <section className="card">
               <div className="card-body">
               <h3 className="card-title">{title}</h3>
               <h4 className="card-subtitle mb-2 text-body-secondary">Price: ₹{price}</h4>
               <p className="card-text">{desc}</p>
                <a href="#" className="card-link text-decoration-none btn btn-primary">Buy Now</a>
               </div>
          </section>
     )
}