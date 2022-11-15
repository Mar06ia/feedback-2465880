import React from 'react'
const App = () =>{

    const bootcamps = [
        {
         id: 1,
         name: 'PHP Bootcamp',
         average_rating:8
        },
        {
         id:2,
         name: 'javascript Bootcamp',
         average_rating: 10
        }   
    ]
  return (
    <div className=''>
        <h1>Listado de Bootcamps</h1>
        <ul>
            { bootcamps.map((bootcamp)=> (
                <li>{ bootcamp.name}</li>
              ))
             }
        </ul>  
    </div>
 )
}

export default App