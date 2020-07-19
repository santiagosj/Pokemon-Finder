/* eslint-disable react/prop-types */
import React,{createContext, useEffect} from 'react'
import { usePokemonReducer } from './PokemonReducer'
import {FIND_POKEMON} from './Actions'
import PropTypes from 'prop-types'

export const PokemonContext = createContext() //genero el context

const PokemonProvider = ({ children }) => {
    
    const [ state, dispatch ] = usePokemonReducer(); //implementación de mi reducer. 

    const { pokemon } = state; //estado inicial traído desde el reducer

    const findPokemon = (pokemon) => dispatch({ type: FIND_POKEMON, pokemon }) //declaración de la acción y hago uso de dispatch para proveer la acción de la capacidad para recibir un string y en base a seta traer determinada data.

    useEffect(() => {
        if(pokemon.pokemon !== undefined && pokemon.pokemon !== null){
            localStorage.setItem('pokemonInStorage', JSON.stringify(pokemon.pokemon));
        }
    }, [pokemon]);

    const providerValues = {
        pokemon,
        findPokemon,
    }
    
    console.log(pokemon)

    return (
        <PokemonContext.Provider value={providerValues}>
            {children}
        </PokemonContext.Provider>
    )
}

export default  PokemonProvider;

