import { Link } from "react-router-dom";

export default function Navbar(){
     return <>
         <nav className="p-3 bg-primary-subtle">
               <ul className="nav nav-underline">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/blog">Blog</Link></li>
                    <li className="nav-item"><Link to="/cars">Cars</Link></li>
                    {/* <li className="nav-item"><a href="/cars">Cars</a></li> */}
               </ul>    
          </nav>  
     </>
}