export default function Footer({author}){
     // const author="Avinash";

     return (
          <footer className="p-3">
               <div className="d-flex justify-content-between">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p>Author: {author}</p>
               </div>

          </footer>
     )
}