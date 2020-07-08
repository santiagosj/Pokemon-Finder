import React,{createContext} from 'react'
import { usePokemonReducer } from './PokemonReducer'
import {FIND_POKEMON} from './Actions'

const PokemonContext = createContext()

const PokemonProvider = ({children}) => {

    const [state, dispatch] = usePokemonReducer();
    
    const { pokemon } = state;

    const findPokemon = (pokemon) => dispatch({ type: FIND_POKEMON, pokemon });

    console.log(pokemon)

    return (
        <PokemonContext.Provider value={{ pokemon, findPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };

