import React from 'react'
import {PokemonProvider} from './Services/Store/PokemonContext'
import Home from './Pages/Home'

const App = () => {

  return (
       <PokemonProvider>
          <Home/>
       </PokemonProvider>
  );
}

export default App;
