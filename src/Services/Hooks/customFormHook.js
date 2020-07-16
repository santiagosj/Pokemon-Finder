import { useState } from 'react'

const useFormHook = (callback) => {

    const [inputs, setInputs] = useState({}); //estado incial 
    
    //función para manejar el evento submit, en el que llamamos el callback que recibimos como parametro.
    const handleSubmit = (e) => {
        if (e) {
           e.preventDefault();
        }
        setInputs({})// una vez hecho el submit setea los inputs escuchados en la siguiente función a un objeto vacío
        callback();// va a ser definido en la implementación del hook
    }

    //función para manejar el evento onChange
    const handleInputChange = (e) => {
         e.persist(); //permite retener las referencias del evento.
         setInputs(inputs => ( {...inputs, [e.target.name]: e.target.value } )); //retorna los distintos valores de los inputs en un objeto
    }
    //retorna los respectivos manejadores de eventos, y los valores de los distintos inputs.
    //ver implementación en SearchBar component => 
    return {
       handleSubmit,
       handleInputChange,
       inputs
    }
}

export default useFormHook