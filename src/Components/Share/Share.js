import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Share = ({url}) => {
    return (
        <div className='share'>
            <FaGithubSquare/>
            <a href={url} alt='link' rel='noreferrer noopener' target='_blank'>Código</a>
        </div>
    )
}

Share.propTypes = {
    url: PropTypes.string.isRequired 
}

export default Share
