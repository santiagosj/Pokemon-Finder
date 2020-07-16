import {useEffect, useState, useContext} from 'react'
import { PokemonContext } from '../../Services/Store/PokemonContext'
import {FIND_POKEMON} from '../../Services/Store/Actions'
import axios from 'axios'

const useAsyncHook = (id) => {

    const [loading, setLoading] = useState('false'); //estado inicial de carga

    const { findPokemon } = useContext(PokemonContext) //acción a despachar 
// 1 -  
     useEffect(() => {
      // 2 - función de petición asyncrona
      async function getPokemon() {
      // 3 - estructura imperativa try/catch 
        try {

           setLoading('true'); //setea estado de carga a true
          //declaración en memoria de constante response, con el endpoint de la petición con axios
           const response = await axios(
             `https://pokeapi.co/api/v2/pokemon/${id}`
           );
           findPokemon({type:FIND_POKEMON, pokemon:response.data }); //despacha la acción con su correspondiente String de acción y data(payload)

        } catch (error) {
          //en caso de error
           setLoading('null'); //el estado de carga se setea a null
           findPokemon({type:FIND_POKEMON, pokemon:null }); //en caso de error despacha la acción seteando el estado en context(pokemon) a null, ej: buscar un pokemon que no existe
        }

      }
      //si el parametro que recibe el hook no es un string vacío genera la llamada a la función con el proceso anteriormente descripto.   
      if (id !== "") {
         getPokemon();
      }

    }, [id]); //escucha de manera constante el estado del parametro pasado a la función principal
     
    return [ loading ]; //retorna el estado de carga.

  }

  export default useAsyncHook