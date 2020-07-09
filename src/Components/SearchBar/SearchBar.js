import React,{ useState } from 'react'
import useCustomFormHook from '../../Services/Hooks/customFormHook'
import useAsyncHook from '../../Services/Hooks/customAsyncHook'

const SearchBar = () => {

//=====================================================================

    const [search, setSearch] = useState('')

    useAsyncHook(search);

    const handleFormSubmit = () => {
        
             let pokId = Object.values(inputs).join().toLowerCase()

             setSearch(pokId)
                         
             document.forms[0].reset()
    }

//=====================================================================

    const { inputs, handleSubmit, handleInputChange } = useCustomFormHook(handleFormSubmit)

     return (
        
        <form onSubmit={handleSubmit}>
             <input 
                type="text" 
                name="pokemon" 
                value={inputs.pokemon || ''}
                onChange={handleInputChange} 
                required
                className={`input`}
                placeholder='ingrese el pokemon a buscar'
             />
            <input className={`button primary`} type="submit" value="🔍 Buscar Pokemon" /> 
        
       </form>
       
    )
}

export default SearchBar
