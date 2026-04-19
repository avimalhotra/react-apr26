export default function Footer(){

     return (
          <footer className="p-3">
               <div className="d-flex justify-content-between">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p>Author: Avinash Malhotra </p>
               </div>

          </footer>
     )
}