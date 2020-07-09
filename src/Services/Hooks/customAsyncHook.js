import {useEffect, useState, useContext} from 'react'
import { PokemonContext } from '../../Services/Store/PokemonContext'
import {FIND_POKEMON} from '../../Services/Store/Actions'
import axios from 'axios'

const useAsyncHook = (id) => {

    const [result, setResult] = useState();

    const [loading, setLoading] = useState('false');

    const { findPokemon } = useContext(PokemonContext)

     useEffect(() => {

      async function getPokemon() {

        try {

          setLoading('true');

          const response = await axios(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

          setResult(response.data);

          findPokemon({type:FIND_POKEMON, pokemon:response.data });

        } catch (error) {

          setLoading('null');

          findPokemon({type:FIND_POKEMON, pokemon:null });

        }

      }
  
      if (id !== "") {

        getPokemon();

      }

    }, [id]);
  
    return [result, loading];

  }

  export default useAsyncHook