import React from 'react'
import { shallow } from 'enzyme'
import Share from '../Share'
import {FaGithubSquare} from 'react-icons/fa'

describe('Renderiza el componente Share',()=>{
    it('debería tener una etiqueta anchor',()=>{
        const url = 'https://github.com/santiagosj/Pokemon-Finder'
        const wrapper = shallow(<Share url={'https://github.com/santiagosj/Pokemon-Finder'}/>)
        const content = <div className='share'>
                          <FaGithubSquare/>
                           <a href={url} alt='link' target="_blank">Código</a>
                        </div>

        expect(wrapper.contains(content)).toBe(true)
    })
})