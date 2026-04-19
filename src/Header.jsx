// export default function Header(prop){
//      console.log(prop);                    // object
//      return (
//           <header className="p-3">
//                <h1>Hello {prop.name} : {prop.version} </h1>
//           </header>
//      )
// }

export default function Header( {name, version, year=0} ){
     // console.log(name);                    // string
     // console.log(version);                    // number
     return (
          <header className="p-3">
               <h1>{name} : {version} </h1>
               <p>Year : {year}</p>
          </header>
     )
}