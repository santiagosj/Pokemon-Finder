import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState({pokemons:[]})

    useEffect(() => {
        async function getPokemons(){
           const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=151");
           setData(result.data);
           console.log(result.data)
        }
        getPokemons()
        
     },[]);

  return (
    <div className="App">
        holis
    </div>
  );
}

export default App;
