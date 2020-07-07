import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'

const PokemonContext = createContext()

const PokemonProvider = ({children}) => {

    const [data, setData] = useState({ pokemons:[] })

    useEffect(() => {
        async function getPokemons(){
           const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=151");
           setData(result.data);
           console.log(result.data)
        }
        getPokemons()
        
     },[]);

    return (
        <PokemonContext.Provider value={data}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };
