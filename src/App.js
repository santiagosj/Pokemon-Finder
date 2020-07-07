import React from 'react'
import {HashRouter} from 'react-router-dom'
import {PokemonProvider} from './Services/Store/PokemonContext'
import AppHolder from './Components/AppHolder/AppHolder'

const App = () => {

  return (
    <HashRouter className="App">
       <PokemonProvider>
          <AppHolder/>
       </PokemonProvider>
    </HashRouter>
  );
}

export default App;
