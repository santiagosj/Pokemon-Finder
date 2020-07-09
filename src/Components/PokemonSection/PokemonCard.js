import React from 'react'

const PokemonCard = ({pokemon}) => {
    return (
        
        <>
          {pokemon !== null && pokemon !== undefined ? (
              <div>
                      <h4>id:[{pokemon.id}] - {`Nombre: [${pokemon.name}]`}</h4>
                            
                      <div className={`cardWrapper`}>
            
                                <div className={`cardItem box`}>
                                    <img className={`cardItem-image`} src={pokemon.sprites.back_default} /> 
                                </div>
            
                                <div className={`cardItem box`}>
                                    <img className={`cardItem-image`} src={pokemon.sprites.front_default} />
                                </div>
                                
                       </div>
              </div>
                
          ):(
              <p>Result</p>
          )}
        </>
        
    )
}

export default PokemonCard
