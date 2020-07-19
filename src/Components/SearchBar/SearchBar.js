import React,{ useState } from 'react'
import useFormHook from '../../Services/Hooks/customFormHook'
import useAsyncHook from '../../Services/Hooks/customAsyncHook'

const SearchBar = () => {

    const [search, setSearch] = useState('') 
    
    useAsyncHook(search);

    const handleFormSubmit = () => {
             let pokId = Object.values(inputs).join().toLowerCase() 
             setSearch(pokId)               
             document.forms[0].reset()
    }

    const { inputs, handleSubmit, handleInputChange } = useFormHook(handleFormSubmit)

    console.log( `Inputs State: ${inputs.pokemon}, Search State: ${search}`)

     return (
        
               <form onSubmit={handleSubmit} className="searchForm" data-testid='searchForm'>
         
                     <input 
                        data-testid='searchInput'
                        id='searchBar'
                        type='text' 
                        name='pokemon' 
                        value={inputs.pokemon || ''} 
                        onChange={handleInputChange} 
                        required
                        className={`input`}
                        placeholder='ingrese el pokemon a buscar'
                     />

                     <input 
                        data-testid='searchButton'
                        className={`button primary`} 
                        type='submit' 
                        value='🔍 Buscar Pokemon' 
                        id='search-button'
                     /> 

               </form>
    )
}

export default SearchBar
