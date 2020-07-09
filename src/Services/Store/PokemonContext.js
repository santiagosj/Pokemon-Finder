import React,{createContext, useEffect} from 'react'
import { usePokemonReducer } from './PokemonReducer'
import {FIND_POKEMON} from './Actions'

export const PokemonContext = createContext()

const PokemonProvider = ({children}) => {
    
    const [state, dispatch] = usePokemonReducer();

    const { pokemon } = state;

    const findPokemon = (pokemon) => dispatch({ type: FIND_POKEMON, pokemon})

    useEffect(() => {
        if(pokemon.pokemon !== undefined){
            localStorage.setItem('pokemonInStorage', JSON.stringify(pokemon.pokemon));
        }
    }, [pokemon]);

    const providerValues = {
        pokemon,
        findPokemon,
    }

    return (
        <PokemonContext.Provider value={providerValues}>
            {children}
        </PokemonContext.Provider>
    )
}

export default  PokemonProvider;

