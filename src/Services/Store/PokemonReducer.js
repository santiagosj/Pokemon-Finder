import { useReducer } from 'react';
import {FIND_POKEMON} from './Actions'

const pokemonReducer = (action, state) => {
    switch(action.type){
        case FIND_POKEMON:
            return  {...state}
        default:
            return state;
    }
}

export const usePokemonReducer = () =>
  useReducer(pokemonReducer,{
      pokemon:{}
});