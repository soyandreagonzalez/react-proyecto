import { useState } from "react";



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmint = (event) => {
        console.preventDefault()
        console.log(inputValue)
        setCategories()
    }


  return (
    <form onSubmit={ (event) => onSubmint (event)}>
        <input 
            type="text" 
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={ (event) => onInputChange (event)}
        />
    </form>    
  )
}
