//dependencias necesarias
import { useState } from "react";
//data
import Resenias from "./data/Resenia";
//componentes
//import Header from "./componentes/Header.jsx";
//import Resenia from "./components/Resenia";
import ReseniaList from "./components/ReseniaList";

    function App(){
          
        //crear estado para arreglo de resenias
        const [lista_resenias,
              setListaResenias] = useState(Resenias)
            
              //metodo para borrar una reseña 
              const deleteResenia = id =>{
                window.confirm("Estas seguro de borrar la reseña")
              }

        return (
            <div className="container">
                <ReseniaList
                 deleteResenia={deleteResenia}
                 listaresenias={lista_resenias}/>
                <Resenias/>
            </div>
       
        )
    }

export default App;