import Header from "./Header";
import Footer from "./Footer";


export default function App(){

  const name="Avinash";

  function sayHi(){ console.log("hi"); }

  return (
    <div className="container">
        <Header />
        <main className="p-3">
          <h2>Hello {name} </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet impedit accusantium libero a incidunt quos deserunt nam repellendus rem ratione nulla alias sapiente beatae autem aliquam repellat, dicta aspernatur.</p>

          {/* <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" /> */}

          <button className="btn btn-primary" onClick={sayHi}>Hello</button>

        </main>
        <Footer author={name}></Footer>
    </div>
  )
}