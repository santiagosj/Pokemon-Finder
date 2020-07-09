import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'

const Share = ({url}) => {
    return (
        <div className='share'>
            <FaGithubSquare/>
            <a href={`${url}`} alt='link' target="_blank">Código</a>
        </div>
    )
}

export default Share
