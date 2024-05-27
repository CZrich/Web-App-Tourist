import React from 'react'

export default function AdapterServicio({ array }) {
    return (
        <div>
            <ul>
                {array.length ? ( array?.map((person) =>{



                    <li key={person.id}>

                        <img src={person.image} alt={person.name} />
                        
                        <h3>{person.name}</h3>

            
                        <p>estado: {person.status}</p>
                        <p> origen: {person.origen}</p>

                    </li>
                })


               ) :(<p>no hay servicios</p>)
           
           
           
           }


            </ul>


        </div>
    )
}
