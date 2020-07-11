import React from 'react'

const PokemonCard = ({pokemon}) => {
    
    return (
        <>
          {pokemon !== null && pokemon !== undefined ? (
              <>
                      <h4>id:[{pokemon.id}] - {`Nombre: [${pokemon.name}]`}</h4>
                            
                      <div className={`cardWrapper`}>
            
                                <div className={`cardItem box`}>
                                    <img id="img-back" className={`cardItem-image`} src={pokemon.sprites.back_default} /> 
                                </div>
            
                                <div className={`cardItem box`}>
                                    <img id="img-front" className={`cardItem-image`} src={pokemon.sprites.front_default} />
                                </div>
                                
                       </div>
              </>
                
          ):(
              <p className='empty'>No hay nada en tu historial de busqueda</p>
          )}
        </>
        
    )
}

export default PokemonCard
