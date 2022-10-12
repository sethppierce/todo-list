import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, getRandom}) {


  return (
    todos.map(todo => {
      return <Todo key={getRandom()} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}