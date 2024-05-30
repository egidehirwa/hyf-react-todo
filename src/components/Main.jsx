import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Form from './Form'
import TodoList from './TodoList'

import './Main.css'

const Main = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoData) => {
        setTodos((prev) => [todoData, ...prev]); 
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const checkTodo = (id) => {
        setTodos((prev) => prev.map((todo) => {
                if(todo.id === id){
                    return { ...todo, completed: !todo.completed}
                }
                return todo;
            })
        )
    }

  return (
    <>
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </>
  )
}

Main.propTypes = {

}

export default Main
