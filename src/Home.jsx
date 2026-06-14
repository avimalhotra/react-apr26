import { useNavigate } from "react-router-dom";

export default function HomeComponent(){

     const navigate=useNavigate();
     
     function GoToCars(){
          navigate('/cars');
     }

     return <>
          <h2>Home Page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos vitae magni. Blanditiis aspernatur, obcaecati voluptatem molestiae dolorem earum minus dolores, architecto temporibus dicta rem assumenda, expedita facilis cupiditate ipsam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos vitae magni. Blanditiis aspernatur, obcaecati voluptatem molestiae dolorem earum minus dolores, architecto temporibus dicta rem assumenda, expedita facilis cupiditate ipsam.</p>
          
          <button className="btn btn-primary" onClick={GoToCars}>View Cars</button>
     </>
}