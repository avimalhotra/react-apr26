import { Routes, Route } from "react-router-dom";
import HomeComponent from "./Home";
import AboutComponent from "./About";
import BlogComponent from "./Blog";
import ScienceBlog from "./ScienceBlog";
import Cars from "./Carapi";

export default function RApp(){
     return (
          <Routes>
               <Route path="/" element={ <HomeComponent /> } />
               <Route path="/about" element={ <AboutComponent /> } />
               <Route path="/blog" element={ <BlogComponent /> } />
               <Route path="/blog/:id" element={<BlogComponent />} />
               <Route path="/blog" element={<BlogComponent />}>
                     <Route path="science" element={<ScienceBlog />} />
                     {/* <Route path="tech" element={<TechComponent />} /> */}
               </Route>
               <Route path="/cars" element={ <Cars />} />
          </Routes>
     )
}