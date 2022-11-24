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

        return (
            <div className="container">
                <ReseniaList listaresenias={lista_resenias}/>
                <Resenias/>
            </div>
       
        )
    }

export default App;