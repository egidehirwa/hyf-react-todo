import React, { useState } from 'react'
import PropTypes from 'prop-types'

import uuid from 'react-uuid';

import './Form.css'

const Form = ({addTodo}) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const changeHandler = (e) => {
        if(e.key === 'enter'){
            return;
        }
        setError(false);
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if(!input.trim()){
            setError(true);
            return;
        }

        const todo = {
            id: uuid(),
            text: input,
            completed: false
        }

        addTodo(todo);
        setInput('');
    }

  return (
    <>
        <form onSubmit={(e) => submitHandler(e)} >
            <input value={input} type="text" onChange={(e) => changeHandler(e)} placeholder="Enter a todo"/>
            <button type="submit">Add Todo</button>
        </form>
        {error && <div className="error">Input can't be empty</div>}
    </>
  )
}

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Form
