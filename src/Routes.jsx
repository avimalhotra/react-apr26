import { Routes, Route } from "react-router-dom";
import HomeComponent from "./Home";
import AboutComponent from "./About";
import BlogComponent from "./Blog";
import Cars from "./Carapi";

export default function RApp(){
     return (
          <Routes>
               <Route path="/" element={ <HomeComponent /> } />
               <Route path="/about" element={ <AboutComponent /> } />
               <Route path="/blog" element={ <BlogComponent /> } />
               <Route path="/cars" element={ <Cars />} />
          </Routes>
     )
}