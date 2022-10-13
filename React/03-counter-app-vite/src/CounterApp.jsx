import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ Value }) => {

    const [ counter, setCounter ]= useState( Value );

    const handleAdd = () => setCounter( counter + 1);
    const handleSubstract = () => setCounter( counter - 1);
    const handleReset = () => setCounter( Value);


    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>

            <button onClick={handleAdd}>Aumentar</button>
            <button onClick={handleSubstract}>Disminuir</button>
            <button onClick={handleReset}>Resetear</button>
        </> 
    )
} 

CounterApp.propTypes={
    h2: PropTypes.number
}