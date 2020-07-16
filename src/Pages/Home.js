import React,{useContext, Fragment} from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import PokemonCard from '../Components/PokemonSection/PokemonCard'
import Share from '../Components/Share/Share'
import { PokemonContext } from  '../Services/Store/PokemonContext'
import Logo from '../assets/logo.png'

const Home = () => {
 
    const { pokemon } = useContext(PokemonContext) //escucho el estado actual del context
    const storageValue = localStorage.getItem('pokemonInStorage') //valor del localStorage
    let pokInfo = Object.values(pokemon).filter(item => typeof item === "object")
    
    console.log(pokemon)

    return (
        <div className={`siteContent`}>

            <h1 className="title"> 
              <img src={Logo} style={{width:'250px'}} alt='Logo'/> 
              <span>Finder</span>  
            </h1>

            <SearchBar />

            <Fragment> 
       
                    <h2>Resultados de la búsqueda</h2>
                   
                    {
                        pokInfo.map( poke => ( poke !== null ? 
                            <PokemonCard key={poke.id} pokemon={poke}/> : 
                            <h3 key={1}>Ese Pokemon no existe</h3> ) 
                        )
                    }
                        
                    <h2>Último pokemon buscado</h2>
                      { storageValue !== undefined && storageValue !== null && (<PokemonCard pokemon={JSON.parse(storageValue)}/>)}
                      
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


