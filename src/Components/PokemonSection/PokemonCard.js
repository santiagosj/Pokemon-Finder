import React from 'react'

const PokemonCard = ({pokemon}) => {
    return (
        <div>
            <h4>[{pokemon.id}]{ pokemon.name }</h4>
            <div>
                <img src={pokemon.sprites.back_default} /> 
                <img src={pokemon.sprites.front_default} />
            </div>
        </div>
    )
}

export default PokemonCard
