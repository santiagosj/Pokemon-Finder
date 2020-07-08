import React,{useContext} from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import PokemonCard from '../Components/PokemonSection/PokemonCard'
import { PokemonContext } from  '../Services/Store/PokemonContext'

const Home = () => {

    const { pokemon } = useContext(PokemonContext)

    let pokInfo = Object.values(pokemon).filter(item => typeof item === "object").map((poke,i) => (
      <div key={i}>
        {poke !== undefined && <PokemonCard pokemon={poke}/>}
      </div>
      )  
     )

    return (
        <div>
            <h1>Pokemon Finder</h1>
            <SearchBar />
            <h2>Resultados de la búsqueda</h2>
            {pokInfo}
        </div>
    )
}

export default Home


