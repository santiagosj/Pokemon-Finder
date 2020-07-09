import React,{useContext, Fragment, useEffect, useState} from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import PokemonCard from '../Components/PokemonSection/PokemonCard'
import Share from '../Components/Share/Share'
import { PokemonContext } from  '../Services/Store/PokemonContext'

import Logo from '../assets/logo.png'

const Home = () => {
 
    const { pokemon } = useContext(PokemonContext)

    const [pokInStorage, setPokInStorage ] = useState()

    useEffect(()=>{

        const storageValue = localStorage.getItem('pokemons')
        
        setPokInStorage(JSON.parse(storageValue))

    },[])

    let pokInfo = Object.values(pokemon).filter(item => typeof item === "object")

   console.log(pokemon)

    return (
        <div className={`siteContent`}>

            <h1> <img src={Logo} style={{width:'250px'}} alt='Logo'/> Finder</h1>

            <SearchBar />
        
            <h2>Resultados de la búsqueda</h2>

            <Fragment> 
                  {
                    pokInfo.map( poke => (poke !== null ? <PokemonCard key={poke.id} pokemon={poke}/> : <h3 key={1}>Ese Pokemon no existe</h3> )  
                  )}
            </Fragment>

            <h2>Último pokemon buscado</h2>

            <Fragment> 
                {pokInStorage !== undefined && <PokemonCard pokemon={pokInStorage}/>}
            </Fragment>

               <hr/>
        <div className='responsiveFlex'> 
             <p>Hecho por Santiago Spinetto Jung</p>
             <Share url={'https://github.com/santiagosj/Pokemon-Finder'}/>
        </div>
             

        </div>
    )
}

export default Home


